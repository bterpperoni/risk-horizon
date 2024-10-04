import React from "react"
import { File, Folder } from "@/components/ui/file-tree"
interface Elements {
  id: string
  name: string
  children?: Elements[]
}

function TreeComp({
  ELEMENTS,
  addCourse,
  CallRename,
  CallDelete,
}: {
  ELEMENTS: Elements[]
  addCourse: (id: number) => void
  CallRename: (id: number) => void
  CallDelete: (id: number) => void
}) {
  return (
    <div>
      {ELEMENTS.map((element) => {
        if (element.children) {
          return (
            <Folder
              element={element.name}
              value={element.id}
              key={element.id}
              className=""
              addCourse={addCourse}
              CallRename={CallRename}
              CallDelete={CallDelete}
            >
              <TreeComp
                ELEMENTS={element.children}
                addCourse={addCourse}
                CallRename={CallRename}
                CallDelete={CallDelete}
              />
            </Folder>
          )
        } else {
          return (
            <File
              value={element.id}
              key={element.id}
              className="!mt-1.5 !mb-1.5"
              addCourse={addCourse}
              CallRename={CallRename}
              CallDelete={CallDelete}
            >
              {element.name}
            </File>
          )
        }
      })}
    </div>
  )
}

export default TreeComp
