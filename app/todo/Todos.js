'use client'

import { useState } from 'react'
import InputField from '../components/molecules/InputField'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'

const Todos = () => {
  const [userInput, setUserInput] = useState('')
  const [list, setList] = useState([])

  const updateInput = (value) => {
    setUserInput(value)
  }

  const AddItem = () => {
    if(userInput !== "") {
      const userInputItem = {
        id: Math.random(),
        value: userInput
      }

      setList([...list, userInputItem])
      setUserInput("")
    }
  }

  const deleteItem = (id) => {
    const updateList = list.filter((item) => item.id !== id)

    setList(updateList)
  }

  const editItem = (index) => {
    const editTodo = prompt('Edit your todo')

    if(editTodo !== null && editTodo.trim() !== "") {
      const updatedTodos = [...list]
      updatedTodos[index].value = editTodo

      setList(updatedTodos)
    }
  }

  const inputFieldData = {
    containerStyle: "relative flex flex-shrink-0 my-4",
    labelForSrOnly: "todo",
    placeholder: "Add item",
    value: userInput,
    onChange: (e) => {
      updateInput(e.target.value)
    },
    icon: false
  }

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="flex flex-col w-full mb-12 md:mb-24">
        <InputField inputFieldData={inputFieldData} />
        <button onClick={AddItem}>Add new task</button>
      </div>
      {
        list.length > 0 ? (
          list.map((item, index) => (
            <div
              className="peer block flew-row justify-between items-center gap-2 w-full rounded-md border border-gray-200 py-[9px] px-5 md:px-10 text-base"
              key={`list-item-${index}`}
            >
              <div className="flex justify-between items-center w-full">
                <p className="block basis-5/6 break-words">
                  {item.value}
                </p>
                <div className="flex basis-1/6 gap-1 md:gap-3">
                  <button
                    className="bg-transparent focus:bg-transparent active:bg-transparent hover:bg-transparent"
                    onClick={() => editItem(index)}
                  >
                    <FaRegEdit className="text-xl" />
                  </button>
                  <button
                    className="bg-transparent focus:bg-transparent active:bg-transparent hover:bg-transparent"
                    onClick={() => deleteItem(item.id)}
                  >
                    <MdDeleteForever className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div classname="flex justify-start items-center mt-24">
            <p className=" text-lg font-bold">No running stasks for today!</p>
          </div>
        )
      }
    </div>
  )
}

export default Todos