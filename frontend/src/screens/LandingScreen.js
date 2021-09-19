import React from 'react';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MyModal from '../components/modalTemp';


function LandingPage() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => {
    // console.log(state.u)
    return state.userLogin
  });
  const { userInfo } = userLogin;
  console.log(userInfo)


  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src=""
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>

              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Platform to enrich </span>{' '}
                <span className="block text-indigo-600 xl:inline">you & your events</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Here you  can register for different events of your choice and can organise your own events.
              </p>
              <div className='flex flex-row'>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md sm:ml-3">
                    <Link
                      to='/home'
                      className="w-full flex items-center  hover:scale-105 shadow-md justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Explore Events
                    </Link>
                  </div>
                </div>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md sm:ml-3">
                    {
                      userInfo === null ? <div></div> :
                        <Link
                          to='/create'
                          className="w-full flex items-center hover:scale-105 shadow-md justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                        >
                          HOST MY EVENT
                        </Link>
                    }
                  </div>
                </div>
              </div>

            </div>
          </main>
        </div>

      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img

          className="h-90 w-full object-cover lg:h-full  sm:h-72 md:h-96 lg:w-full "
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/05/animated-logos.jpg?auto=format&q=60&w=1860&h=1090&fit=crop&crop=faces"
          alt=""
        />
      </div>
    </div>
  );
}

export default LandingPage;

