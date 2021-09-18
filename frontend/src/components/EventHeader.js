import React from "react";

class EventHeader extends React.Component{

    render(){
        return(
           <div className='event-header flex flex-row justify-evenly'>
               <div className='date px-3 py-2.5 bg-blue-300 rounded-2xl text-center uppercase'>
                   <div className='date--month text-blue-500'>May</div>
                   <div className='date--date text-blue-800 text-3xl'>08</div>
               </div>
               <div className='w-5'></div>
               <div >
                   <div className='event-title font-extrabold '>How To Manage Yout Time and Get Things Done</div>
                   <div className='event-time inline-block text-gray-400'>Thu: 10:00 AM</div>
                   <div className='w-8 inline-block'></div>
                   <i class="fas fa-video  hover:scale-125 inline-block"></i>
                   <div className='w-5 inline-block'></div>
                   <button className='registerNowBtn border-blue-500 border-2 p-1 rounded-full font-medium  transform hover:text-white hover:bg-blue-500 hover:scale-105 transition-all duration-200 hover:shadow-2xl active:shadow-sm active:scale-100 ' >Register Now</button>
               </div>
              
           </div>
        );
    }
}
export default EventHeader;