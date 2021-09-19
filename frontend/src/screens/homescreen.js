import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listEvents } from '../actions/eventActions';
import SingleEvent from "../components/SingleEvent"

export default function HomeScreen() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.eventList);

  const { events, loading } = data;
  
  useEffect(() => {
    dispatch(listEvents());
  }, [dispatch]);
  return (
    <>
      
      <div className="flex justify-center">
    
      </div>
      <div className="flex flex-col items-center">
        {
          events.data != null ? events.data.map((data) => {

            return <SingleEvent events={data} />
          }) : <img className="m-auto h-24" src="loading.gif" />
        }
      </div>
    </>
  )
}
