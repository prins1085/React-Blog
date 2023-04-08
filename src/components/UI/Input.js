import React from 'react'

const Input = (props) => {
  return (
    <div className='my-4 flex flex-col'>
        <label className="font-bold flex-1 text-gray-700" htmlFor={props.id}>{props.label}</label>
        <input className="flex-3 py-1 px-2 rounded-md border border-gray-300 focus:outline-none focus:bg-purple-100" type={props.type} id={props.id} name={props.name} value={props.value} onChange={props.onChange} />
        
    </div>
  )
}

export default Input