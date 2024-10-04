"use client"
import YooptaEditor, { createYooptaEditor, YooEditor } from "@yoopta/editor"
import { use, useEffect, useMemo } from "react"
import Paragraph from "@yoopta/paragraph"
import LinkTool, { DefaultLinkToolRender } from "@yoopta/link-tool"
import ActionMenu, { DefaultActionMenuRender } from "@yoopta/action-menu-list"
import Toolbar, { DefaultToolbarRender } from "@yoopta/toolbar"
import {
  Bold,
  Highlight,
  CodeMark,
  Strike,
  Underline,
  Italic,
} from "@yoopta/marks"
import Blockquote from "@yoopta/blockquote"
import Embed from "@yoopta/embed"
import Image from "@yoopta/image"
import Link from "@yoopta/link"
import Callout from "@yoopta/callout"
import Video from "@yoopta/video"
import Accordion from "@yoopta/accordion"
import { NumberedList, BulletedList, TodoList } from "@yoopta/lists"
import { HeadingOne, HeadingThree, HeadingTwo } from "@yoopta/headings"
import Code from "@yoopta/code"
import Table from "@yoopta/table"
import Divider, { DividerCommands } from "@yoopta/divider"
import { html } from "@yoopta/exports"
import { useState } from "react"
import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Pen, X } from "lucide-react"
import { useClerk } from "@clerk/nextjs"

interface EditorProps {
  id: number
}

export default function Editor({ id }: EditorProps) {
  const { session } = useClerk()
  console.log()
  const [isEditing, setIsEditing] = useState(false)

  const editor = useMemo(() => createYooptaEditor(), [isEditing])

  useEffect(() => {
    if (isEditing) {
      SetContent()
    }
  }, [isEditing])

  const plugins = [
    Paragraph,
    Table,
    Divider.extend({
      elementProps: {
        divider: (props) => ({
          ...props,
          color: "#007aff",
        }),
      },
    }),
    Accordion,
    HeadingOne,
    HeadingTwo,
    HeadingThree,
    Blockquote,
    Callout,
    NumberedList,
    BulletedList,
    TodoList,
    Code,
    Link,
    Embed,
    Image,

    Video,
  ]
  const TOOLS = {
    Toolbar: {
      tool: Toolbar,
      render: DefaultToolbarRender,
    },
    ActionMenu: {
      tool: ActionMenu,
      render: DefaultActionMenuRender,
    },
    LinkTool: {
      tool: LinkTool,
      render: DefaultLinkToolRender,
    },
  }

  const { mutate } = useMutation({
    mutationKey: ["edit-course"],
    mutationFn: async (text: string) => {
      const { data } = await axios.post("/api/edit-course", {
        id: id,
        text: text,
      })
      refetch()
      return data
    },
    onSuccess: () => {
      toast.success("Course updated")
    },
    onError: () => {
      toast.error("An error occurred while updating the course")
    },
  })

  const { data, isError, refetch } = useQuery({
    queryKey: ["get-course"],
    queryFn: async () => {
      const { data } = await axios.get(`/api/get-course?id=${id}`)
      const CourseDataParsed = data as { Content: string }
      editor.setEditorValue(html.deserialize(editor, CourseDataParsed.Content))
      return data
    },
    retry: 1,
    refetchOnWindowFocus: false,
  })

  function SetContent() {
    const CourseDataParsed = data as { Content: string }
    editor.setEditorValue(html.deserialize(editor, CourseDataParsed.Content))
  }

  useEffect(() => {
    refetch()
  }, [id])

  if (isError) {
    editor.setEditorValue(
      html.deserialize(
        editor,
        `<body id="yoopta-clipboard" data-editor-id="3025525a-c170-4d82-8ee3-bbda3f6da728"></body>`
      )
    )
  }

  const exportHTML = () => {
    const data = editor.getEditorValue()
    const htmlString = html.serialize(editor, data)
    mutate(htmlString)
  }

  //Cacher l'erreur chiante de la console
  const originalConsoleError = console.error
  console.error = (...args) => {
    if (
      typeof args[0] === "string" &&
      (args[0].includes("Warning: Prop") ||
        args[0].includes("[Report Only]") ||
        args[0].includes("Warning: Input contains an input"))
    ) {
      return
    }
    originalConsoleError(...args)
  }
  return (
    <>
      <div className="absolute right-10 top-10 ">
        {session?.user.publicMetadata.role == "admin" && (
          <Button
            onClick={() => {
              if (isEditing) {
                exportHTML()
              }
              setIsEditing(!isEditing)
            }}
          >
            {isEditing ? <X /> : <Pen />}
          </Button>
        )}
      </div>
      <YooptaEditor
        editor={editor}
        plugins={plugins}
        tools={TOOLS}
        key={isEditing ? "editable" : "readonly"}
        marks={[Bold, Highlight, CodeMark, Strike, Underline, Italic]}
        placeholder="Start typing here..."
        readOnly={!isEditing}
      />
    </>
  )
}
