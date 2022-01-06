import { useState } from "react"
import Container from './Container'

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false)
    const dropdownList = [
        { text : 'Internet', href : '#'},
        { text : 'Books', href : '#'},
        { text : 'Open Source', href : '#'}
  ]
    return (
      <nav className="py-10">
        <Container>
          <div className="flex items-center ">
            <div className="w-2/12 flex items-center">
              <div className="w-8 h-8 mr-4 bg-gray-500 rounded flex items-center justify-center shadow-2xl">E</div>
              Epicentrum
            </div>
            <div className="w-7/12">
              <ul className="space-x-10 flex">
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
            <div className="w-3/12 text-right">
              <input type="text" className="py-2 px-6 rounded-full bg-gray-700 bg-search pl-10 focus:outline-none hover:bg-gray-700/50" placeholder="Search..." />
            </div>
          </div>
        </Container>
      </nav>
    )
}

export default Navbar
