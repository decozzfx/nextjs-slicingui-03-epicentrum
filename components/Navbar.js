import Link from "next/link"
import { useState } from "react"
import Container from './Container'

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false)
    const [offCanvas, setOffCanvas] = useState(false)
    const [search, setSearch] = useState(false)
    const dropdownList = [
        { text : 'Internet', href : '/posts'},
        { text : 'Books', href : '/posts'},
        { text : 'Open Source', href : '/posts'}
  ]
    return (
      <nav className="py-10">
        <Container>
          <div className="flex items-center ">
            <div className="w-3/12 lg:hidden">
              <button onClick={() => setOffCanvas(!offCanvas)}>
                <img src="/menu.svg"/>
              </button>
            </div>
            <div className="lg:w-2/12 w-6/12  ">
              <Link href='/'>
                <a className="flex items-center justify-center lg:justify-start">
                  <div className="w-8 h-8 mr-4 bg-gray-500 rounded flex items-center justify-center shadow-2xl">E</div>
                  Epicentrum
                </a>
              </Link>
            </div>
            <div className="lg:hidden w-3/12 text-right">
              <button onClick={() => setSearch(!search)}>
                <img className="inline-block" src="/search-nav.svg"  />
              </button>
            </div>
            <div className={`lg:w-7/12 w-full h-full lg:h-auto fixed top-0 p-14 lg:p-0 bg-gradient-to-b from-gray-600 lg:bg-none lg:static to-gray-900 transition-all ${offCanvas ? 'left-0' : '-left-full'}`}>
              <button 
              onClick={() => setOffCanvas(false)}
              className="top-5 right-10 absolute lg:hidden">
                <img src="/close.svg" />
              </button>
              <ul className="lg:space-x-10 lg:items-center flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-center">
                <li><Link href='/posts'><a className="hover:underline">UI Design</a></Link></li>
                <li><Link href='/posts'><a className="hover:underline">Front-End</a></Link></li>
                <li><Link href='/posts'><a className="hover:underline">Back-End</a></Link></li>
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
                      <Link href={href}><a className="flex py-2 px-6 hover:bg-gray-700/60">{text}</a></Link>
                    </li>
                    ))}
                  </ul>
                  )}
                </li>
              </ul>
            </div>
            <div className={` lg:w-3/12 lg:text-right lg:mr-4 absolute lg:static left-0 px-10 lg:px-0 w-full transition-all ${search ? 'top-10' : '-top-40'}`}>
              <input type="text" className="py-2 px-6 lg:rounded-full rounded-lg w-full bg-gray-700 bg-search pl-10 focus:outline-none hover:bg-gray-700/50" placeholder="Search..." />
              <button 
              onClick={() => setSearch(false)}
              className="top-2 right-12 absolute lg:hidden">
                <img src="/close.svg" />
              </button>
            </div>
          </div>
        </Container>
      </nav>
    )
}

export default Navbar
