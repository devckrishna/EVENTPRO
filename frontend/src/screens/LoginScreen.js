import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginScreen() {
  return (
    <div className="h-screen bg-gradient-to-r from-purple-600 via-indigo-400 to-purple-500" >
      <header className="max-w-lg mx-auto py-4">
        < a href="#" >
          <h1 className="text-4xl font-bold text-white text-center">Login</h1>
        </a >
      </header >

      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <h3 className="font-bold text-2xl">Welcome to EventPro</h3>
          <p className="text-gray-600 pt-2">Sign in to your account.</p>
        </section>

        <section className="mt-10">
          <form className="flex flex-col">
            <div className="mb-6 pt-3 rounded bg-gray-100">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
              <input type="text" id="email" className="bg-gray-100 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-100">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
              <input type="password" id="password" className="bg-gray-100 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
            </div>

            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" >Sign In</button>
          </form>
        </section>
      </main>

      <div className="max-w-lg mx-auto text-center mt-12 mb-6">
        <p className="text-white">Don't have an account? <Link to="signup" className="font-bold hover:underline">Sign up</Link>.</p>
      </div>
    </div >
  )
}
