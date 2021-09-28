//actions type
export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";

// actions creator function that return an object that contain the action

export const getUser = () => ({
  type: GET_USER,
});
export const setUser = (user) => ({
  type: SET_USER,
  user,
});

const initialState = {
  user: undefined,
};

// reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action;
      return { ...state, user };

    default:
      return state;
  }
};
export default userReducer;
