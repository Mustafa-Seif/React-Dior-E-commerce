
const stories = {addItem:[],addWish:[],login:false}

const reducerAddItem = (state = stories, action) => {
  switch (action.type) {
    case "ADDITEM":
      return {...state, addItem:[...state.addItem,{...action.payload,quantity:1}]};
      break;

    case "REMOVEITEM":
      return {...state,addItem:state.addItem.filter((x) => {
        return x.id !== action.payload.id;
      })};
      break;
      case "INCREASE":
      return {...state,addItem:state.addItem.forEach((x) => {
        // return action.payload.quantity++;
      })};
      break;
      case "DECREASE":
      return {...state,addItem:state.addItem.filter((x) => {
        // return action.payload.quantity--;
      })};
      break;

      case "ADDTOWISH":
        return {...state, addWish:[...state.addWish,action.payload]};
        break;
  
      case "REMOVEWISH":
        return {...state,addWish:state.addWish.filter((x) => {
          return x.id !== action.payload.id;
        })};
        break;
        case "ISLOG":
          return {...state,login:action.payload};
          break;

      

    default:
      return state;
      break;
  }
};

export default reducerAddItem;



// const addItem = [];

// const reducerAddItem = (state = addItem, action) => {
//   switch (action.type) {
//     case "ADDITEM":
//       return [...state, action.payload];
//       break;

//     case "REMOVEITEM":
//       return (state = state.filter((x) => {
//         return x.id !== action.payload.id;
//       }));
//       break;ئ

      

//     default:
//       return state;
//       break;
//   }
// };

// export default reducerAddItem;

