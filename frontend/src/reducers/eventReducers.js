import * as actions from '../constants/eventConstants';

const eventListReducer = (state = { events: [] }, action) => {
  switch (action.type) {
    case actions.EVENT_LIST_REQUEST:
      return {
        loading: true,
        events: [],
      };
    case actions.EVENT_LIST_SUCCESS:
      return {
        loading: false,
        events: action.payload,
      };
    case actions.EVENT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { eventListReducer };
