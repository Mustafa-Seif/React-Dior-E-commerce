const addItem = [];

const reducerAdd = (state = addItem, action) => {
  switch (action.type) {
    case "ADDITEM":
      return [...state, action.payload];
      break;

    case "REMOVEITEM":
      return (state = state.filter((x) => {
        return x.id !== action.payload.id;
      }));
      break;

      

    default:
      return state;
      break;
  }
};

export default reducerAdd;
