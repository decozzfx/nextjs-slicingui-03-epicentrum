import { useState } from "react"
export default function Home() {
  const [dropdown, setDropdown] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-600 to-gray-900 text-white">
      <nav className="py-10">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="w-2/12 flex items-center">
              <div className="w-8 h-8 mr-4 bg-gray-500 rounded flex items-center justify-center shadow-2xl">E</div>
            Epicentrum
            </div>
            <div className="w-8/12">
            <ul className="space-x-10 flex">
              <li><a className="hover:underline" href="#">UI Design</a></li>
              <li><a className="hover:underline" href="#">Front-End</a></li>
              <li><a className="hover:underline" href="#">Back-End</a></li>
              <li className="realtive">
                <a className="hover:underline" href="#">Lainnya</a>
                <ul className="absolute w-[200px]">
                  <li><a href="#" className="flex py-2 px-6 bg-gray-700 border-b border-white/5">Internet</a></li>
                  <li><a href="#" className="flex py-2 px-6 bg-gray-700 border-b border-white/5">Book</a></li>
                  <li><a href="#" className="flex py-2 px-6 bg-gray-700 border-b border-white/5">Open Source</a></li>
                </ul>
              </li>
            </ul>
            </div>
            <div className="w-2/12">
              <input type="text" className="py-2 px-6 rounded-full bg-gray-700 bg-search pl-10" placeholder="Search..." />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
