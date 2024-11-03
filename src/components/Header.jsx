import React from 'react'
import avatar from '../assets/icons/avatar.png'
import iconNotify from '../assets/icons/icon-notify.svg'

const Header = () => {
  return (
    <header className="max-w-7xl m-auto flex items-center justify-between py-4 px-8 gap-4">
      <a className="bangers text-4xl" href="/">
        Anime View
      </a>
      <div className="w-full max-w-sm min-w-[200px]">
        <div className="relative">
          <input
            className="w-full flex items-center bg-neutral-200 placeholder:text-neutral-600 text-neutral-900 text-sm rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-2 hover:border-slate-300 shadow-sm"
            placeholder="Procure aqui"
          />
          <button
            className="absolute top-[6px] right-1 flex flex-1 items-center py-1 px-2.5 text-center transition-all focus: active: disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#262626"
              className="w-4 h-4"
            >
              <title>search</title>
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav className="flex items-center gap-6">
        <button type="button">
          <img className="w-full" src={iconNotify} alt="" />
        </button>
        <button type="button">
          <img src={avatar} alt="" />
        </button>
      </nav>
    </header>
  )
}

export default Header
