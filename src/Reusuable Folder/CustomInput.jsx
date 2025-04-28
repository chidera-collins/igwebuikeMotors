import React from 'react'

function CustomInput({Icon, type, placeholder,textarea, className='',value,onChange,...restProperties}) {
  return (
    <div className={`relative flex items-center ${className}`}>
      {Icon &&<Icon className="absolute top-3 left-3 text-gray-500 text-lg" />}
      {textarea?
        (
            <textarea
            className="h-[80px] w-full bg-white pl-10 pt-2 border border-gray-300 rounded-md resize-none"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...restProperties}
          />
        ):(
            <input
            type={type}
            className={`h-[30px]  bg-white pl-10 border border-gray-300 rounded-md ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...restProperties}
          />

        )}
     

    </div>
  )
}

export default CustomInput