import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="bg-white shadow-lg dark:bg-gray-800 p-3 sticky" >
      <div
        className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1
              className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
              href="#"
            >EventPro</h1
            >
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="items-center md:flex">
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link to="/home"
              className="my-1 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
              href="#"
            >Home </Link>
            <Link to="/" href='#' className="my-1 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">Events</Link>
            
           

             {
               isUserLoggedIn ?
               <Link to="/logout"
               className="my-1 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
               href="#">
             <button
               class="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
               type="button">
                   logout
               </button>
               </Link>
               :
               <Link to="/login"
               className="my-1 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
               href="#">
             <button
               class="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
               type="button">
                 Login / SignUp
               </button>
               </Link>
             }

            
            
            <Link  href='#' className="my-2.5 text-gray-700 dark:text-gray-200 text-4xl md:mx-4 md:my-0"><i class="fas fa-user-circle -my-3.5"></i></Link>


          </div>
        </div>
      </div>
    </nav>
  )
}
