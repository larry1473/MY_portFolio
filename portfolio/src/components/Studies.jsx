import React from 'react'

export const Studies = ({image,text}) => {
  return (
    <div className='flex justify-center space-x-4 text-[1.5rem]'>
                <img
                  src={image}
                  alt="Université de Montréal"
                  className="h-6 w-auto"
                />
              <span className='text-gray-600'>{text}</span>
    </div>
  )
}
