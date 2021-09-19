import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listEvents } from '../actions/eventActions';
import SingleEvent from "../components/SingleEvent"

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
  useEffect(() => {
    dispatch(listEvents());
  }, [dispatch]);
  return (
    <>
      <div className="flex justify-center">
        <h1>events</h1>
      </div>
      <Link to="/create">
        <button>create</button>
      </Link>
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
