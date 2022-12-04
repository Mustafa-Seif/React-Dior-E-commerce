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

export const wishList = (data)=>{
    return{
        type:'ADDTOWISHLIST',
        payload:data
    }

}