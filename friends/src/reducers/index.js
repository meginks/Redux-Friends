import { getData, FETCHING, SUCCESS, FAILURE } from '../actions';

const initialState = {
    friends: []
  };
  const reducer = (state = initialState, action) => {
  
    switch (action.type) {
      // Fill me in with the important reducers
      // action types should be FETCHING, SUCCESS and FAILURE
      // your switch statement should handle all of these cases.
      case FETCHING: 
      return {
        ...state, 
        friends: [],
        isLoading: true, 
        error: '',
        LoggedIn: true
  
      }
      case SUCCESS:
      return {
        ...state,
        isLoading: false,
        friends: action.payload,
        error: '',
        LoggedIn: true
      }
  
      case FAILURE: 
      return {
        ...state,
        friends: [],
        isLoading: false,
        error: action.payload,
        LoggedIn: false
  
      }
  
      default:
        return state;
    }
  };


  export default reducer;