import {
    LOGIN_BEGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    LOGOUT_BEGIN,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
  
} from "../Action";

const auth_reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case LOGIN_BEGIN:
          return {...state, login_loading: true};
        case LOGIN_SUCCESS:
          return {...state, login_loading: false, login_data: action.payload.user};
        case LOGIN_FAIL:
          return {...state, login_loading: false};
          case LOGOUT:
            return {...state, login_data: ''};
          case LOGOUT_BEGIN: 
          return {...state}
          case LOGOUT_SUCCESS: 
          return{...state, login_data: ''}
          case LOGOUT_FAIL: 
          return{...state, }
        }
        
        return state;
}

export default auth_reducer;