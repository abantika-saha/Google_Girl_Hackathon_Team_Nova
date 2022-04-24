export default (state = { isLoading: true, doubts: [] }, action) => {
    switch (action.type) {
      case 'START_LOADING':
        return { ...state, isLoading: true };
      case 'END_LOADING':
        return { ...state, isLoading: false };
      case "FETCH_ALL":
        return {
          ...state,
          doubts: action.payload.data,
        };
      case "FETCH_POST":
        //console.log(action.payload.doubt);
        return { ...state, doubt: action.payload.doubt };
        case "COMMENT":
        return {
          ...state,
          doubts: state.doubts.map((doubt) => {
            if (doubt._id == +action.payload._id) {
              return action.payload;
            }
            return doubt;
          }),
        };
      case "CREATE":
        return { ...state, doubts: [...state.doubts, action.payload] };
      case "UPDATE":
        return { ...state, doubts: state.doubts.map((doubt) => (doubt._id === action.payload._id ? action.payload : doubt)) };
      case "DELETE":
        return { ...state, doubts: state.doubts.filter((doubt) => doubt._id !== action.payload) };
      default:
        return state;
    }
  };