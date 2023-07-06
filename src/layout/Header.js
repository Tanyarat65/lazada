import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const menu = [
        { id: 1, name: 'SAVE MORE ON APP', color: '#0F1568', href: '' },
        { id: 2, name: 'SELL ON LAZADA', color: '#0F1568', href: '' },
        { id: 3, name: 'CUSTOMER CARE', color: '#9E9E9E', href: '' },
        { id: 4, name: 'TRACK MY ORDER', color: '#9E9E9E', href: '' },
        { id: 5, name: 'LOGIN', color: '#9E9E9E', href: '' },
        { id: 6, name: 'SIGNUP', color: '#9E9E9E', href: '' },
        { id: 7, name: 'เปลี่ยนภาษา', color: '#9E9E9E', href: '' },
    ]

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-[#F7F7F7] px-[10%]">
        <div className="flex items-center justify-between">

          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

        </div>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } max-[960px]:flex justify-center mt-4 text-xs`}
        >
          {menu.map((item) => (
            <div
              className="mx-3 mt-2"
              key={item.id}
              style={{ color: item.color }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    );
}
