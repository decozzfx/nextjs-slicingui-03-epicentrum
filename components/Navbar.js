import { useState } from "react"
import Container from './Container'

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false)
    const [offCanvas, setOffCanvas] = useState(false)
    const dropdownList = [
        { text : 'Internet', href : '#'},
        { text : 'Books', href : '#'},
        { text : 'Open Source', href : '#'}
  ]
    return (
      <nav className="py-10">
        <Container>
          <div className="flex items-center ">
            <div className="w-3/12 md:hidden">
              <button onClick={() => {setOffCanvas(!offCanvas)}}>
                <img src="/menu.svg"/>
              </button>
            </div>
            <div className="md:w-2/12 w-6/12  flex items-center justify-center md:justify-start">
              <div className="w-8 h-8 mr-4 bg-gray-500 rounded flex items-center justify-center shadow-2xl">E</div>
              Epicentrum
            </div>
            <div className="md:hidden w-3/12 text-right">
              <img className="inline-block" src="/search-nav.svg"  />
            </div>
            <div className={`md:w-7/12 w-full h-full fixed top-0 p-14 bg-gradient-to-b from-gray-600 to-gray-900 transition-all ${offCanvas ? 'left-0' : '-left-full'}`}>
              <button 
              onClick={() => {setOffCanvas(false)}}
              className="top-5 right-5 absolute ">
                <img src="/close.svg" />
              </button>
              <ul className="md:space-x-10 md:items-center flex flex-col space-y-4 ">
                <li><a className="hover:underline" href="#">UI Design</a></li>
                <li><a className="hover:underline" href="#">Front-End</a></li>
                <li><a className="hover:underline" href="#">Back-End</a></li>
                <li className="realtive">
                  <a className="hover:underline cursor-pointer flex items-center " onClick={() => setDropdown(!dropdown)}>Lainnya
                  <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  </a>
                  {dropdown && (
                  <ul className="absolute w-[200px] rounded shadow-2xl bg-gray-800 mt-4 transition-all duration-200">
                    {dropdownList.map(({text, href}) => (
                    <li key={text} className="border-b border-white/5 last:border-0">
                      <a href={href} className="flex py-2 px-6 hover:bg-gray-700/60">{text}</a>
                    </li>
                    ))}
                  </ul>
                  )}
                </li>
              </ul>
            </div>
            <div className="hidden w-3/12 text-right md:mr-4">
              <input type="text" className="py-2 px-6 rounded-full bg-gray-700 bg-search pl-10 focus:outline-none hover:bg-gray-700/50" placeholder="Search..." />
            </div>
          </div>
        </Container>
      </nav>
    )
}

export default Navbar
