import React from 'react'

function CustomInput({Icon, type, placeholder,textarea, className=''}) {
  return (
    <div className={`relative flex items-center ${className}`}>
      {Icon &&<Icon className="absolute top-3 left-3 text-gray-500 text-lg" />}
      {textarea?
        (
            <textarea
            className="h-[80px] w-full bg-white pl-10 pt-2 border border-gray-300 rounded-md resize-none"
            placeholder={placeholder}
          />
        ):(
            <input
            type={type}
            className={`h-[40px]  bg-white pl-10 border border-gray-300 rounded-md ${className}`}
            placeholder={placeholder}
          />

        )}
     

    </div>
  )
}

export default CustomInput