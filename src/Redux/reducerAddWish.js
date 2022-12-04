const addWish = [];

const reducerAddWish = (state = addWish, action) => {
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

export default reducerAddWish;
