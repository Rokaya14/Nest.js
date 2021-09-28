//actions type
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// actions creator function that return an object that contain the action
export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
  type: DECREMENT,
});

const initialState = {
  count: 0,
};

// reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};
export default counterReducer;
