import React from "react";
import PriceSelector from '../components/PriceSelector';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import MyModal from "../components/modalTemp";

class AddEvent extends React.Component {
  
    temp = () => {

    }
    render() {
        let  isUserLoggedIn=0;

        return (
            <div className='flex flex-col h-screen justify-between px-6'>
                {
                    isUserLoggedIn
                    
                    ? <div className='flex flex-col justify-between'> <div className='grid grid-cols-3  gap-10 row-gap-3 col-gap-3 mt-20'>
                    <div>
                        <div className='flex relative flex-col   rounded-xl py-5 justify-start  mx-auto p-2  '>
                            <div className='p-1 text-gray-900 font-bolder'>Title</div>
                            <input placeholder='Event title' className='text-gray-900 bg-gray-100 p-1.5 title rounded '></input>
                            <div className='p-1 text-gray-900 font-bolder'>Description</div>
                            <textarea placeholder='Description' rows="5" cols="10" wrap="soft" className='text-gray-900 description leading-2 bg-gray-100 p-1.5 title rounded outline-none'></textarea>
                        </div>
                        <div className='flex relative flex-col   rounded-xl py-5 justify-start  mx-auto p-2   '>
                            <div className='p-1 text-gray-900 font-bolder'>Meeting I'd</div>
                            <input disabled='true' placeholder='Automatic generated' className='text-gray-900 bg-gray-100 p-1.5 title rounded outline-none '></input>
                        </div>

                    </div>
                    <div> <div className='flex relative flex-col   rounded-xl py-5 justify-start  mx-auto p-2  '>
                        <div className='p-1 text-gray-700 font-semibold'>Start Time</div>
                        <input type='time' className='rounded'></input>
                        <div className='p-1 text-gray-700 font-semibold'>End Time</div>
                        <input type='time' className='rounded'></input>
                    </div>


                        <div className='flex relative flex-col   rounded-xl py-5 justify-start  mx-auto p-2  '>
                            <PriceSelector></PriceSelector>
                        </div>
                        <div className='flex relative flex-col   rounded-xl py-5 justify-start  mx-auto p-2  '>
                            <div className='p-1 text-gray-700 font-semibold'>Slots</div>
                            <input type='number' placeholder='No of Slots' className='text-gray-900 bg-gray-100 p-1.5 title rounded outline-none '></input>
                        </div> </div>
                    <div> <div className='flex relative flex-col   rounded-xl py-5 justify-start  mx-auto p-2   '>
                        <div className='p-1 text-gray-700 font-semibold'>Select Day</div>
                        <DayPicker />
                    </div> </div>

                </div>


                <button style={styles.CreateEventBtn} className='text-lg font-semibold mt-8 hover:bg-red-800 rounded-full uppercase h-14'>Create My Event</button></div>
                    :<MyModal></MyModal>
                }
            </div>




        );
    }
}
const styles = {
    CreateEventBtn: {
        backgroundColor: '#8B5CF6',
    }

}


export default AddEvent;
