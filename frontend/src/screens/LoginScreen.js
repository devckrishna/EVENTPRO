import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import { ToastContainer, toast } from 'react-toastify';
import LinkButton from "../components/LinkButton";

export default function LoginScreen({ history, location }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    console.log(email);
    console.log(password);
    <Redirect to='/' />

  };

  const notify = () => {
    toast.error(`❕ ${error}`, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className="h-screen  pb-10 bg-gradient-to-r from-purple-600 via-indigo-400 to-purple-500" >
      <header className="max-w-lg mx-auto py-4 mb-10">
        <h1 className="text-4xl font-bold text-white text-center">Login</h1>
      </header >

      <main className="bg-white max-w-lg mx-auto p-8 md:p-12  rounded-lg shadow-2xl">
        <section>
          <h3 className="font-bold text-2xl">Welcome to EventPro</h3>
          <p className="text-gray-600 pt-2">Sign in to your account.</p>
        </section>

        <section className="mt-10">
          <div className="max-w-lg mx-auto text-center mt-12 mb-6">
            <p className="text-black">Don't have an account? <Link to="signup" className="font-bold hover:underline">Sign up</Link>.</p>
          </div>
          <form className="flex flex-col" onSubmit={(e) => loginHandler(e)}>
            <div className="mb-6 pt-3 rounded bg-gray-100">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
              <input onChange={(e) => setEmail(e.target.value)} type="text" id="email" className="bg-gray-100 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-100">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
              <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="bg-gray-100 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
            </div>

            <LinkButton to="/home" onClick={(e) => loginHandler(e)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Login
            </LinkButton>

          </form>
        </section>

      </main>


    </div >
  )
}
