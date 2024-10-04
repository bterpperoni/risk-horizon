"use client"
import { v4 as uuidv4 } from "uuid"
import { useEffect, useState } from "react"
import { Tree } from "@/components/ui/file-tree"
import Landing from "./courses/landing"
import Phishing from "./courses/phishing"
import JS from "./courses/js"
import TreeComp from "./tree"
import Editor from "./editor"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { toast } from "sonner"
import { AlertTriangle, Pen, X } from "lucide-react"
import { useMutation, useQuery } from "@tanstack/react-query"
// Mock data for categories and nested courses

export default function Component() {
  const [selectedID, setselectedid] = useState<number>(0) // Renamed to `setSelectedID`
  const [refresh, setRefresh] = useState<boolean>(false)
  const [isRenameOpen, setIsRenameOpen] = useState<boolean>(false)
  const [renameText, setRenameText] = useState<string>("")
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false)
  const [isEditingMode, setIsEditingMode] = useState<boolean>(false)

  console.log(selectedID)
  //a recursive function to find the element with the corresponding id in the tree and add a new course to it

  function CallRename(id: number) {
    setIsRenameOpen(!isRenameOpen)
    setselectedid(id)
  }

  function CallDelete(id: number) {
    setIsDeleteOpen(!isDeleteOpen)
    setselectedid(id)
  }

  function deleteCourse(id: number) {
    function deleteCourseRecursive(elements: Elements[]) {
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].id === id.toString()) {
          elements.splice(i, 1)
          return
        }
        if (elements[i].children !== undefined) {
          deleteCourseRecursive(elements[i].children as Elements[])
        }
      }
    }
    deleteCourseRecursive(ELEMENTS)
    setRefresh(!refresh)
  }

  function renameCourse(id: number, name: string) {
    function renameCourseRecursive(elements: Elements[]) {
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].id === id.toString()) {
          elements[i].name = name
          return
        }
        if (elements[i].children !== undefined) {
          renameCourseRecursive(elements[i].children as Elements[])
        }
      }
    }
    renameCourseRecursive(ELEMENTS)
    setRefresh(!refresh)
  }

  function addCourse(id: number) {
    const fetchData = async () => {
      const data = await axios.get(`/api/get-course?id=${id}`)
      if (data.data.Content.length > 190) {
        toast.error("Le document doit être vide pour devenir un dossier")
        return
      }
      const newID = Math.floor(Math.random() * 2000000).toString()
      let newElement = {
        id: newID,
        isSelectable: true,
        name: "New Course",
      }
      function addCourseRecursive(elements: Elements[]) {
        for (let i = 0; i < elements.length; i++) {
          if (elements[i].id === id.toString()) {
            if (elements[i].children) {
              elements[i].children?.push(newElement)
              initialExpandedItems.push(newElement.id)
            } else {
              elements[i].children = [newElement]
            }
            return
          }
          if (elements[i].children !== undefined) {
            addCourseRecursive(elements[i].children as Elements[])
          }
        }
      }
      addCourseRecursive(ELEMENTS)
      setRefresh(!refresh)
    }
    fetchData()
  }

  const { mutate } = useMutation({
    mutationKey: ["edit-course-layout"],
    mutationFn: async (element: Elements[]) => {
      const { data } = await axios.post("/api/edit-course-layout", {
        content: element,
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
    queryKey: ["get-course-layout"],
    queryFn: async () => {
      const { data } = await axios.get(`/api/get-course-layout`)
      console.log(data.Content)
      ELEMENTS = data.Content as Elements[]
    },
    retry: 1,
    refetchOnWindowFocus: false,
  })

  return (
    <div className="flex h-screen bg-background w-full">
      <Dialog open={isDeleteOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              <DialogTitle>Are you sure ?</DialogTitle>
            </div>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Input
              id="username"
              className=""
              placeholder='Type "DELETE" to confirm'
              onChange={(e) => setRenameText(e.target.value)}
              value={renameText}
            />
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant={"secondary"}
              onClick={() => {
                setIsDeleteOpen(!isDeleteOpen)
                setRenameText("")
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant={"destructive"}
              disabled={renameText !== "DELETE" ? true : false}
              onClick={() => {
                deleteCourse(selectedID)
                setIsDeleteOpen(!isDeleteOpen)
                setRenameText("")
              }}
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={isRenameOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Name element</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Name :
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
                onChange={(e) => setRenameText(e.target.value)}
                value={renameText}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant={"secondary"}
              onClick={() => {
                setIsRenameOpen(!isRenameOpen)
                setRenameText("")
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={() => {
                renameCourse(selectedID, renameText)
                setIsRenameOpen(!isRenameOpen)
                setRenameText("")
              }}
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="flex h-screen bg-background !w-full">
        <aside className="w-5xl border-r overflow-auto">
          <Tree
            className="p-2 overflow-visible rounded-md bg-background tree-text"
            initialExpandedItems={initialExpandedItems}
            elements={ELEMENTS}
            setselectedid={setselectedid}
          >
            <TreeComp
              ELEMENTS={ELEMENTS}
              addCourse={addCourse}
              CallRename={CallRename}
              CallDelete={CallDelete}
            />
          </Tree>
          <Button
            className="fixed bottom-2"
            onClick={() => {
              if (isEditingMode) {
                mutate(ELEMENTS)
              }
              setIsEditingMode(!isEditingMode)
            }}
          >
            {isEditingMode ? <X /> : <Pen />}
          </Button>
        </aside>

        <main className="flex-1 overflow-auto p-6 relative !w-full ">
          <Editor id={selectedID} />
        </main>
      </div>
    </div>
  )
}

interface Elements {
  id: string
  isSelectable: boolean
  name: string
  children?: Elements[]
}

let ELEMENTS: Elements[] = [
  {
    id: "1",
    isSelectable: true,
    name: "Introduction",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "C'est quoi la cybersécurité ?",
      },
      {
        id: "3",
        isSelectable: true,
        name: "Pourquoi la cybersécurité ?",
      },
    ],
  },
  {
    id: "4",
    isSelectable: true,
    name: "Les techniques de base",
    children: [
      {
        id: "5",
        isSelectable: true,
        name: "Phishing",
      },
      {
        id: "6",
        isSelectable: true,
        name: "Virus",
      },
      {
        id: "11",
        isSelectable: false,
        name: "Sécurité des systèmes embarqués",
        children: [
          {
            id: "12",
            isSelectable: true,
            name: "Introduction",
          },
        ],
      },
    ],
  },
  {
    id: "7",
    isSelectable: true,
    name: "Se sécuriser",
    children: [
      {
        id: "8",
        isSelectable: true,
        name: "Mots de passe",
      },
    ],
  },
]

let initialExpandedItems = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "300",
]
