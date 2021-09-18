import React from "react";

class EventFooter extends React.Component{

    render(){
        return(
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
        );
    }
}
export default EventFooter;