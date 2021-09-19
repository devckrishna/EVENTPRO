import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import MyModal from './modalTemp';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function SingleEvent(props) {
    const [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const event = props.events;
    const eventLink = event.eventLink.toString();
    const date = event.date.toString().split("-")
    console.log(props.events.eventLink);
    return (
        <div className='bg-gray-100 shadow-sm flex flex-row  xl:justify-evenly justify-between items-between p-6 w-8/12 rounded-2xl h-72 m-6'>
            <div className='w-0 left  flex  md:w-80 flex-col justify-center items-center'>
                <img className='rounded-2xl    object-cover h-80' src='https://happifiers-cms-uploads.happify.com/cms_uploads/en_US/img/happifiers/key-to-productivity-1_24c9d0e.jpg'></img>
            </div>

            <div className='right w-6/12 flex flex-col justify-around'>
                <div className='event-header flex flex-row justify-evenly md:justify-around '>
                    <div className='date px-2.5 py-1.5 bg-blue-300 rounded-2xl text-center uppercase'>
                        <div className='date--month text-blue-500'>{monthNames[parseInt(date[1])]}</div>
                        <div className='date--date text-blue-800 text-2xl'>{date[2].substring(0, 2)}</div>
                    </div>
                    <div className='w-5 inline-block'></div>
                    <div >
                        <div className='event-title font-extrabold '>{event.name}</div>
                        <div className='event-time inline-block text-gray-400 my-1'>Start Time: {event.startTime} AM</div>
                        <div className='w-8 inline-block'></div>
                        <Link to={{ pathname: eventLink }} target="_blank"><i class="fas fa-video  hover:scale-125 inline-block"></i></Link>

                        <div className='w-5 inline-block'></div>
                        <button onClick={() => setIsOpen(true)} className='registerNowBtn border-blue-500 border-2 p-2 rounded-full font-medium text-xs  transform hover:text-white hover:bg-blue-500 hover:scale-105 transition-all duration-200 hover:shadow-2xl active:shadow-sm active:scale-100 ' >Register Now</button>
                        {
                            isOpen ? <>
                                {/* <div className="fixed inset-0 flex items-center justify-center">
                              <button
                                type="button"
                                onClick={openModal}
                                className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                              >
                                Open dialog
                              </button>
                            </div> */}

                                <Transition appear show={isOpen} as={Fragment}>
                                    <Dialog
                                        as="div"
                                        className="fixed inset-0 z-10 overflow-y-auto"
                                        onClose={closeModal}
                                    >
                                        <div className="min-h-screen px-4 text-center">
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0"
                                                enterTo="opacity-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Dialog.Overlay className="fixed inset-0" />
                                            </Transition.Child>

                                            {/* This element is to trick the browser into centering the modal contents. */}
                                            <span
                                                className="inline-block h-screen align-middle"
                                                aria-hidden="true"
                                            >
                                                &#8203;
                                            </span>
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0 scale-95"
                                                enterTo="opacity-100 scale-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100 scale-100"
                                                leaveTo="opacity-0 scale-95"
                                            >
                                                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                                    <Dialog.Title
                                                        as="h3"
                                                        className="text-lg font-medium leading-6 text-gray-900"
                                                    >
                                                        <div className='flex flex-col'>
                                                            {/* <i class="fas fa-check-circle text-3xl text-green-500"></i> */}
                                                            <span>Resgister?</span>
                                                        </div>
                                                    </Dialog.Title>
                                                    <div className="mt-2 flex flex-col">

                                                        <p className="text-sm text-gray-500">
                                                            Are You Sure You Want To Register For This Event?
                                                        </p>
                                                    </div>

                                                    <div className="mt-4  flex flex-row justify-between">
                                                        <Link to='/'>
                                                            <button
                                                                type="button"
                                                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-purple-500 border border-transparent rounded-md hover:bg-purple-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                                            >
                                                                Register
                                                            </button></Link>

                                                        <button
                                                            type="button"
                                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-500 border border-transparent rounded-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            Cancel
                                                        </button>

                                                    </div>
                                                </div>
                                            </Transition.Child>
                                        </div>
                                    </Dialog>
                                </Transition>
                            </> : <div></div>
                        }
                    </div>

                </div>
                <div className='description break-normal text-gray-400'>{event.description}</div>
                <div className='host font-medium'>~ Mr. Ankur Attri</div>

                <div className='event-footer flex flex-row justify-between'>
                    <div className='participant-details'>
                        <i class="fas fa-user-check text-green-600"></i>
                        <div className='w-1 inline-block'></div>
                        <span className='participant-till-now font-semibold'>{event.participants.length}</span>
                        <div className='w-5 inline-block'></div>
                        <i class="fas fa-user text-red-600"></i>
                        <div className='w-1 inline-block'></div>
                        <span className='participant-left font-semibold'>{event.slots - event.participants.length}</span>
                    </div>
                    <div className='price font-bold'>Price: $ {event.price}</div>
                </div>
            </div>
        </div>
    );
}
