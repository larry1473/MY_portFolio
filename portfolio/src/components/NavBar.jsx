import React from 'react'

export const NavBar = ({scrollToSection}) => {
    const [lang, setLang] = React.useState("ENG")
   
  return (
    <div className='flex justify-between '>
        <div className='left-side font-bold text-3xl ' >
            <p>Larry Fotso.G</p>
        </div>
        <div className='righ-side  text-2xl ' >
            <ul className='flex  space-x-6'>
                <li  onClick={() => scrollToSection("about-me")} className='hover:text-gray-500 hover:border-b-2 hover:border-gray-500 pb-1 transihover:underline transition-all'>About</li>
                <li  onClick={() => scrollToSection("experience")} className='hover:text-gray-500 hover:border-b-2 hover:border-gray-500 pb-1 transihover:underline transition-all'>Experience</li>
                <li  onClick={() => scrollToSection("projects")} className='hover:text-gray-500 hover:border-b-2 hover:border-gray-500 pb-1 transihover:underline transition-all'>Projects</li>
                <li  onClick={() => scrollToSection("contact")} className='hover:text-gray-500 hover:border-b-2 hover:border-gray-500 pb-1 transihover:underline transition-all'>Contact</li>
                {/* <li className='hover:text-gray-500 hover:border-b-2 hover:border-gray-500 pb-1 transihover:underline transition-all' onClick={() =>{setLang(lang === "ENG" ? "FR" : "ENG") }}>{lang}</li> */}
            </ul>
        </div>
    </div>
  )
}
