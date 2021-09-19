import React, { useState } from "react";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

function AddEvent() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => {
        // console.log(state)
        return state.userLogin
    });
    const { userInfo } = userLogin;
    console.log(userInfo.token)

    const [title, setTitle] = useState(undefined);
    const [description, setDescription] = useState(undefined);
    const [date, setDate] = useState(undefined);
    const [start, setStart] = useState(undefined);
    const [end, setEnd] = useState(undefined);
    const [price, setPrice] = useState(undefined);
    const [slots, setSlots] = useState(undefined);
    const [meetingId, setMeetingId] = useState(undefined);


    if (date !== undefined)
        console.log(date.toString().split(" "));
    if (meetingId !== undefined)
        console.log(meetingId)

    const registerEvent = async () => {
        const event = {
            name: title,
            price: price,
            description: description,
            eventLink: meetingId,
            date: date,
            startTime: start,
            endTime: end,
            slots: slots
        };
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const data = await axios.post("/api/event/create", event, config);
        setIsOpen(true);
        setInterval(() => {
            setIsOpen(false);
        }, 5000);
        console.log(data);
    }

    return (
        <div className='flex flex-col justify-between items-center'>
            <div className='grid grid-cols-3  gap-10 row-gap-3 col-gap-3 mt-20'>
                <div>
                    <div className='flex relative flex-col   rounded-xl py-5 justify-start  shadow-md mx-auto p-2  '>
                        <div className='p-1 text-gray-900 font-bolder'>Title</div>
                        <input onChange={(e) => setTitle(e.target.value)} placeholder='Event title' className='text-gray-900 bg-gray-100 p-1.5 title rounded '></input>
                        <div className='p-1 text-gray-900 font-bolder'>Description</div>
                        <input onChange={(e) => setDescription(e.target.value)} placeholder='Description' rows="5" cols="10" wrap="soft" className='text-gray-900 description leading-2 bg-gray-100 p-1.5 title rounded outline-none'></input>
                    </div>

                    </div>

                </div>
                <div> <div className='flex relative flex-col   rounded-xl py-5 justify-start  shadow-md mx-auto p-2  '>
                    <div className='p-1 text-gray-700 font-semibold'>Start Time</div>
                    <input type='time' className='rounded' onChange={(e) => setStart(e.target.value)}></input>
                    <div className='p-1 text-gray-700 font-semibold' >End Time</div>
                    <input type='time' className='rounded' onChange={(e) => setEnd(e.target.value)}></input>
                </div>



                    <div className='flex relative flex-col   rounded-xl py-5 justify-start  shadow-md mx-auto p-2  '>
                        <div className='w-4/6'>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                Price
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-gray-500 sm:text-sm">$</span>
                                </div>
                                <input
                                    onChange={(e) => setPrice(e.target.value)}
                                    type="text"
                                    name="price"
                                    id="price"
                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                    placeholder="0.00"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                    <label htmlFor="currency" className="sr-only">
                                        Currency
                                    </label>
                                    <select
                                        id="currency"
                                        name="currency"
                                        className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                                    >
                                        <option>Rs</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex relative flex-col   rounded-xl py-5 justify-start  shadow-md mx-auto p-2  '>
                        <div className='p-1 text-gray-700 font-semibold'>Slots</div>
                        <input onChange={(e) => setSlots(e.target.value)} type='number' placeholder='No of Slots' className='text-gray-900 bg-gray-100 p-1.5 title rounded outline-none '></input>
                    </div> </div>
                <div> <div className='flex relative flex-col   rounded-xl py-5 justify-start  shadow-md mx-auto p-2   '>
                    <div className='p-1 text-gray-700 font-semibold'>Select Day</div>
                    <DayPicker
                        selectedDays={date}
                        onDayClick={(day) => setDate(day)}
                    />
                </div> </div>


                </div>


                <button style={styles.CreateEventBtn} className='text-lg font-semibold mt-8 hover:bg-red-800 rounded-full uppercase h-14'>Create My Event</button></div>
                    :<MyModal></MyModal>
                }

            </div>

            <button onClick={() => registerEvent()} style={styles.CreateEventBtn} className=' text-lg font-semibold uppercase h-14 w-6/12'>Create My Event</button>


            <>
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
                                        Success
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Event Is Successfully Created
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition>
            </>
        </div>
    );
}

const styles = {
    CreateEventBtn: {
        backgroundColor: '#8B5CF6',
    }

}


export default AddEvent;
