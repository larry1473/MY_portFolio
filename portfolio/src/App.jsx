import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavBar } from './components/NavBar'
import 
{ 
  FaLinkedin, FaGithub, 
  FaGraduationCap,
  FaBriefcase,FaTools,
  FaEnvelope,
  FaPhoneAlt 

} from "react-icons/fa";
import { Studies } from './components/Studies';
import { ProjectCart } from "./components/ProjectCart";
import resume from './assets/resume.pdf'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  };

  return (
    <div className='p-[2rem] flex-row space-y-28'>
       <NavBar scrollToSection = {scrollToSection}/>
       <div className='flex justify-center space-x-18'>
        <div className='picture'>
          <img src="../public/2036.jpg" className="  w-95 rounded-lg shadow-lg"/>
        </div>
        <div className='flex-row  content-center text-center'>
          <p className="text-gray-600 text-3xl md:text-5xl typing-effect ">Hello, i am </p>
          <h1 className='text-5xl font-bold'>Larry Fotso.G</h1>
          <p className='text-gray-600 text-3xl'>Aspiring Full Stack software Engineer</p>
          <div className="flex justify-center p-10 pt-2 space-x-9 pb-2.5">
            <button  onClick={() => scrollToSection("contact")} className="rounded-full pl-6 pr-6 pt-2 pb-2 border hover:bg-gray-900 hover:border hover:text-white" >Contact</button>
            <button className="rounded-full pl-4 pr-4 pt-2 pb-2 border hover:bg-gray-900 hover:border hover:text-white" onClick={() => window.open(resume,'_blank')}>My resume</button>
          </div>
          <div className='flex space-x-5 text-4xl justify-center'>
                <a
                  href="https://www.linkedin.com/in/larry-fotso-guiffo/"
                  className="text-black hover:text-blue-700 transition duration-300 "
                >
                      <FaLinkedin />
                </a>

                <a
                  href="https://github.com/larry1473"
                  className="text-black hover:text-blue-700 transition duration-300"
                >
                    <FaGithub />
                </a>
          </div>
        </div>
       </div>

       {/* About me  */}
       <div  id='about-me' className='text-center'>
            <h1 className='text-4xl font-bold'>About me</h1>
            <div className='flex justify-between pt-4'>
              <div className=' text-3xl border-gray-400 rounded-lg w-[40rem] shadow-xl pt-4 pb-6 space-y-18'>
              <div className='flex justify-center space-x-2.5'>
                <FaGraduationCap className="black inline text-4xl" /> 
                <p className='text-2xl inline text-gray-600'> Education</p>
              </div>
                <div className='items-center space-y-6 '>
                  <Studies image={"../public/udem.jpeg"} text={'Bachelor of Computer Science 2022-2024'}/>
                  <Studies image={"../public/udem.jpeg"} text={'Certificate in applied Computer Science 2021-2022 '}/>
                  <Studies image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fibisa.unican.es%2Fwp-content%2Fuploads%2F2023%2F12%2FUMONS-logo-1024x274.png&f=1&nofb=1&ipt=9298fee1dacb5fb7f0b91869c1c63ae224222720a4e8aa7521c980d8cb5d690e&ipo=images"} text={'Bachelor of Computer Science 2018-2021'}/>
                  
                  
                </div>
              </div>
              
              <div className=' text-left text-xl border-gray-700 rounded-lg w-[40rem] shadow-xl p-6'>
                Hello! I’m a dedicated Computer Science graduate from the University of Montreal. My academic journey began at the University of Mons in Belgium, and I have since developed a strong passion for technology, continuously exploring diverse aspects of the field and applying my knowledge in innovative ways.
                <br />
                <br />
                I hold a Bachelor's degree in Computer Science from the University of Montreal. My studies at the University of Mons provided me with a solid foundation, which I further expanded at the University of Montreal, focusing on software development, systems analysis, and emerging computing technologies.
              </div>
            </div>
        </div>
        {/* Experience */}
      <div id='experience' className='text-center'>
        <h1 className='text-4xl font-bold'>Experience & Skills</h1>
          <div className='flex justify-between pt-4 '>
            
            <div className=' text-xl border-gray-700 rounded-lg w-[40rem] shadow-xl p-6'>
                <div className='flex justify-center space-x-2.5'>
                      <FaBriefcase className="black inline text-3xl" /> 
                      <p className='text-2xl inline text-gray-600'>Professional Experience</p>
                </div>
            <div className='text-left pt-5'>
                Teaching Assistant in Programming
                <p    
                    className='text-gray-500'>
                    University of Montreal <br />
                    September 2023 – December 2023
                </p>

              <ul className='list-disc pl-8'>
                <li>
                  Provided support sessions, guiding students in solving Python exercises and
                  clarifying programming concepts.
                </li>
              </ul>
            </div>

            <div className='text-left pt-5'>
                Teaching Assistant in Software Engineering
                <p    
                    className='text-gray-500'>
                    University of Montreal <br />
                    September 2024 – December 2024
                </p>

              <ul className='list-disc pl-8'>
                <li>Graded assignments and assisted with academic projects.</li>
                <li>
                  Delivered sessions on UML Diagrams (class, sequence) and unit testing with
                  JUnit.
                </li>
                <li>
                  Provided support during office hours to answer students’ questions on software
                  design and coding standards.
                </li>
              </ul>
            </div>

          </div>
              <div className='  text-xl border-gray-700 rounded-lg w-[40rem] shadow-xl p-6'>
                <div className='flex justify-center space-x-2.5 '>
                      <FaTools className="black inline text-3xl" /> 
                      <p className='text-2xl inline text-gray-600'>Skills</p>
                </div>
                <div className=' middle pt-4 text-left space-y-3'>
                  <p>
                  <b>Programming Languages</b>: Java, Python, TypeScript, JavaScript, HTML, CSS, C++,
                  C#, C
                  </p>
                  <p>
                    <b>Frameworks and Tools</b>: Node.js, Express.js, Bootstrap, React, Flutter, Tailwind CSS
                  </p>
                  <p>
                    <b>Database Management</b>: MySQL, MongoDB
                  </p>
                  <p>
                  <b>Other Skills</b>:REST API Development, Agile Methodologies, Git, Testing with
                  Jest, CI/CD (Basics), UML, DevOps(learing), JWT
                  </p>
                </div>
                    
              </div>
          </div>
      </div>

      {/* Projects */}
      <div id="projects" className="">
        <h1 className='text-4xl font-bold text-center'>Projects</h1>
        <div className=" gap-5 flex justify-center  w-full h-full pt-6 ">
          <div className="w-[35rem] h-[30rem] rounded-lg border-gray-700 shadow-2xl">
              <ProjectCart image="../public/cafeSansFil.png" title={"Student Café Management Mobile App"} des={"App to manage cafe staff and it's stocks "}  gitLink={'https://github.com/larry1473/cafesansfil-mobile'} demo={"https://drive.google.com/file/d/1GNoI4bMbtajqU7q1QDSAhnXwuJLLPN5n/view"}/>
          </div>

          <div className="w-[35rem] h-[30rem] rounded-lg border-gray-700 shadow-2xl">
            <ProjectCart image="../public/image.png" title={"Project Management Mobile App"} des={"App to manage group projects "}  gitLink={'https://github.com/larry1473/IFT3225_Projet2'} demo={""}/>
          </div>

        </div>
      </div>
      {/* Contact */}
      <div id="contact">
        <h1 className='text-4xl text-center font-bold'> Contact Me </h1>
        <div className='flex justify-center pt-4 '> 
          <div className='border p-3 pl-15 pr-15 rounded-full space-x-3'>
            <p className=' inline'>
            <FaEnvelope className=' text-3xl inline'/> <span className='hover:text-gray-500 hover:border-b-2 hover:border-gray-500 pb-1 transihover:underline transition-all '>fotsoguiffo8@gmail.com </span>
            </p>
            <p className='inline'>
            <FaLinkedin className='inline text-3xl ' />
            <span className='hover:text-gray-500 hover:border-b-2 hover:border-gray-500 pb-1 transihover:underline transition-all '><a href="https://www.linkedin.com/in/larry-fotso-guiffo/">LinkedIn</a></span>
            </p>
            <p className='inline'>
            <FaPhoneAlt className='inline text-3xl ' />
            +1 (514)473-2354
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
