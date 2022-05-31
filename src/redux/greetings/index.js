const FETCH_GREETING = 'greetings/FETCH_GREETING';

// actions
const fetchGreeting = (payload) => ({
  type: FETCH_GREETING,
  payload,
});

// state
const initialState = "";

export const fetchGreetingApi = () => async (dispatch) => {
  const resp = await fetch('http://localhost:3001/api/message');
  const result = await resp.json();
  dispatch(fetchGreeting(result.message));
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;