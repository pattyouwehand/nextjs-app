'use client'

import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const InputField = ({ inputFieldData }) => {
 const {
  containerStyle,
  labelForSrOnly,
  placeholder,
  value,
  onChange,
  defaultValue,
  icon
 } = inputFieldData

  return (
    <div className={containerStyle}>
      <label htmlFor={labelForSrOnly} className="sr-only">{labelForSrOnly}</label>
      <input
        className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
      />
      {
        icon &&
        <FaMagnifyingGlass className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      }
    </div>
  )
}

export default InputField