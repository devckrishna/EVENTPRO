import React from "react";
import EventSwitch from '../components/EventSwitch';
import EventPaidSwitch from '../components/EventPaidSwitch';

class EventPageHeader extends React.Component{

    render(){
        return(
            <div className=' flex flex-row justify-between px-5'>
                 <EventSwitch></EventSwitch>
                 <EventPaidSwitch></EventPaidSwitch>
            </div>

        );
    }
}
export default EventPageHeader;