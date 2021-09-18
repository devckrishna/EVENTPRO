import axios from 'axios';
import * as actions from '../constants/eventConstants';

const listEvents = () => async (dispatch) => {
  try {
    dispatch({ type: actions.EVENT_LIST_REQUEST });

    const { data } = await axios.get(`/api/event/`);

    dispatch({
      type: actions.EVENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actions.EVENT_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};


export { listEvents };
