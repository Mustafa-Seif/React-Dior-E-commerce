export const addItem = (data)=>{
    return{
        type:'ADDITEM',
        payload:data
    }

}

export const removeItem = (data)=>{
    return{
        type:'REMOVEITEM',
        payload:data
    }

}

export const addWish = (data)=>{
    return{
        type:'ADDTOWISH',
        payload:data
    }

}

export const removeWish = (data)=>{
    return{
        type:'REMOVEWISH',
        payload:data
    }
   
}

export const isLog =(data)=>{
    return{
        type:'ISLOG',
        payload:data
    }
}
