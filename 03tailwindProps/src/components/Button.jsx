import React from 'react'

function Button({username}) {
  return (
        <button className="relative flex-1/2 ml-4">
        <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
        <div className="transition bg-black relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="p-2 ">
            <p className="text-xl font-outerSans font-medium text-white">{username}</p>
          </div>
        </div>
      </button>
  )
}

export default Button