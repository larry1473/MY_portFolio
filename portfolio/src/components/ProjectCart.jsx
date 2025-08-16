import React from 'react'

export const ProjectCart = ({image,title,des,gitLink,demo}) => {
  return (
    <div className=''>
        <img src={image} alt="Café Sans Fil" className="w-full h-[20rem] rounded-3xl p-4" />
        <div className="p-4  text-center">
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-gray-600">{des}</p>
        </div>
        <div className="flex justify-center p-10 pt-1 space-x-9 pb-2.5">
            <button  className="rounded-full pl-6 pr-6 pt-2 pb-2 border hover:bg-gray-900 hover:border hover:text-white" ><a href={gitLink}>GitHub</a></button>
            <button className="rounded-full pl-4 pr-4 pt-2 pb-2 border hover:bg-gray-900 hover:border hover:text-white"><a href={demo}>Live Demo</a></button>
        </div>
    </div>
  )
}
