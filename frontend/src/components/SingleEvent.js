import React from "react";
import EventFooter from "./EventFooter";
import EventHeader from "./EventHeader";

class SingleEvent extends React.Component{

    render(){
        return(
           <div className='lg:bg-white flex lg:flex-row md:flex-col sm:flex-col   justify-between items-between p-6 w-7/12 rounded-2xl h-80'>
               <div className='left  flex  flex-col justify-center items-center'>
                   <img className='rounded-2xl w-80 object-cover h-80' src='https://happifiers-cms-uploads.happify.com/cms_uploads/en_US/img/happifiers/key-to-productivity-1_24c9d0e.jpg'></img>
               </div>
               <div className='right w-6/12 flex flex-col justify-around'>
                   <EventHeader></EventHeader>
                   <div className='description break-normal text-gray-400'>This is thet best seminar on 'How to manage time and get the best productivity out of yourself'</div>
                   <div className='host font-medium'>~ Mr. David Ogatta</div> 
                   <EventFooter></EventFooter>
               </div>
           </div>
        );
    }
}
export default SingleEvent;