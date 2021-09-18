import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listEvents } from '../actions/eventActions';


export default function HomeScreen() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.eventList);
  // const user = useSelector((state) => {
  //   console.log(state)
  //   return state.userLogin
  // })
  const { events, loading } = data;
  // const { userInfo } = user;
  // console.log(userInfo.email)
  if (events.data != null) {
    console.log(events.data)
  }
  useEffect(() => {
    dispatch(listEvents());
  }, [dispatch]);
  return (
    <div className="flex h-screen">{
      events.data == null ? <img className="m-auto h-24" src="loading.gif" /> : events.data.map((data) => (
        <div>{data.name}</div>
      ))
    }
    </div>
  )
}
