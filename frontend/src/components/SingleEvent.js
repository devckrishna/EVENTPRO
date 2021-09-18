import React from "react";

class SingleEvent extends React.Component {

    render() {
        return (
            <div className='bg-gray-100 shadow-sm flex flex-row  xl:justify-evenly justify-between items-between p-6 w-7/12 rounded-2xl h-72'>
                <div className='w-0 left  flex  md:w-80 flex-col justify-center items-center'>
                    <img className='rounded-2xl    object-cover h-80' src='https://happifiers-cms-uploads.happify.com/cms_uploads/en_US/img/happifiers/key-to-productivity-1_24c9d0e.jpg'></img>
                </div>

                <div className='right w-6/12 flex flex-col justify-around'>
                    <div className='event-header flex flex-row justify-evenly md:justify-around '>
                        <div className='date px-2.5 py-1.5 bg-blue-300 rounded-2xl text-center uppercase'>
                            <div className='date--month text-blue-500'>May</div>
                            <div className='date--date text-blue-800 text-2xl'>08</div>
                        </div>
                        <div className='w-5 inline-block'></div>
                        <div >
                            <div className='event-title font-extrabold '>How To Manage Yout Time and Get Things Done</div>
                            <div className='event-time inline-block text-gray-400'>Thu: 10:00 AM</div>
                            <div className='w-8 inline-block'></div>
                            <i class="fas fa-video  hover:scale-125 inline-block"></i>
                            <div className='w-5 inline-block'></div>
                            <button className='registerNowBtn border-blue-500 border-2 p-1 rounded-full font-medium text-xs  transform hover:text-white hover:bg-blue-500 hover:scale-105 transition-all duration-200 hover:shadow-2xl active:shadow-sm active:scale-100 ' >Register Now</button>
                        </div>

                    </div>
                    <div className='description break-normal text-gray-400'>This is thet best seminar on 'How to manage time and get the best productivity out of yourself'</div>
                    <div className='host font-medium'>~ Mr. David Ogatta</div>

                    <div className='event-footer flex flex-row justify-between'>
                        <div className='participant-details'>
                            <i class="fas fa-user-check text-green-600"></i>
                            <div className='w-1 inline-block'></div>
                            <span className='participant-till-now font-semibold'>40</span>
                            <div className='w-5 inline-block'></div>
                            <i class="fas fa-user text-red-600"></i>
                            <div className='w-1 inline-block'></div>
                            <span className='participant-left font-semibold'>12</span>
                        </div>
                        <div className='price font-bold'>Price: $ 999</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SingleEvent;