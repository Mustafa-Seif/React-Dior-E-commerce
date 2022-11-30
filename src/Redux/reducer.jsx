const addItem = []

const reducerAdd =(state = addItem, action)=>{
    switch (action.type) {
        case 'ADDITEM':
            // return[
            //     ...state,action.payload
            // ]
            console.log(state)
            console.log(action.payload);
            if (state.length>0) {
                return state.map((el)=>{
                    if (el.id != action.payload.id) {
                        return [...state,action.payload]
                    }
                    else if(el.id == action.payload.id){
                        return [...state]
                    }
                })
                
            }else{
                return[
                    ...state,action.payload
                ]
            }
            
            
            break;

            case 'REMOVEITEM':
            return state = state.filter((x)=>{
                return x.id !== action.payload.id
            })
            break;
    
        default: return state
            break;
    }

}


export default reducerAdd