'use client'

import { useState, useEffect } from 'react'
import InputField from '../components/molecules/InputField'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

interface TodoItem {
  _id: string;
  value: string;
}

const Todos = () => {
  const [userInput, setUserInput] = useState<string>("")
  const [list, setList] = useState<TodoItem[]>([])

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw new Error("Failed to fetch todos")
        const data: TodoItem[] = await response.json()
        setList(data)

      } catch (error) {
        console.error("Error fetching todos:", error)
      }
    }
    fetchTodos()
  }, [])

  const updateInput = (value: string) => setUserInput(value)

  const addItem = async () => {
    if (!userInput.trim()) return
    const newTodo: Omit<TodoItem, "_id"> = { value: userInput }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo)
      })

      if (!response.ok) throw new Error("Failed to add todo")
      const data = await response.json()

      setList((prev) => [...prev, data])
      setUserInput("")

    } catch (error) {
      console.error("Error adding item:", error)
    }
  }

  const deleteItem = async (_id: string) => {
    try {
      const response = await fetch(`${API_URL}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id })
      })

      if (!response.ok) throw new Error("Failed to delete todo")
      setList((prev) => prev.filter((item) => item._id !== _id))

    } catch (error) {
      console.error("Error deleting item:", error)
    }
  }

  const editItem = async (index: number) => {
    const newValue = prompt('Edit your todo', list[index].value)
    if (!newValue || newValue.trim() === "") return
    const updatedTodo = { ...list[index], value: newValue }

    try {
      const response = await fetch(`${API_URL}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTodo)
      })

      if (!response.ok) throw new Error("Failed to update todo")
      const updatedTodos = [...list]
      updatedTodos[index] = updatedTodo
      setList((prev) => prev.map((item, i) => (i === index ? updatedTodo : item)))

    } catch (error) {
      console.error("Error updating item:", error)
    }
  }

  const inputFieldData = {
    containerStyle: "relative flex flex-shrink-0 my-4",
    labelForSrOnly: "todo",
    placeholder: "Add item",
    value: userInput,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => updateInput(e.target.value),
    icon: undefined
  }

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="flex flex-col w-full mb-12 md:mb-24">
        <InputField inputFieldData={inputFieldData} />
        <button className="font-bold" onClick={addItem}>
          Add new task
        </button>
      </div>
      {
        list.length > 0 ? (
          list.map((item, index) => (
            <div
              className="peer block flex-row justify-between items-center gap-2 w-full rounded-md border border-gray-200 py-[9px] px-5 md:px-10 text-base"
              key={`list-item-${index}`}
            >
              <div className="flex justify-between items-center w-full">
                <div className="block basis-5/6 break-words">
                  {item.value}
                </div>
                <div className="flex basis-1/6 gap-1 md:gap-3">
                  <button
                    className="bg-transparent focus:bg-transparent active:bg-transparent hover:bg-transparent"
                    onClick={() => editItem(index)}
                  >
                    <FaRegEdit className="text-xl" />
                  </button>
                  <button
                    className="bg-transparent focus:bg-transparent active:bg-transparent hover:bg-transparent"
                    onClick={() => deleteItem(item._id)}
                  >
                    <MdDeleteForever className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-start items-center mt-24">
            <p className="text-lg font-bold">No running tasks for today!</p>
          </div>
        )
      }
    </div>
  )
}

export default Todos