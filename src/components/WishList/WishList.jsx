import React from 'react'
import { createDispatchHook, createSelectorHook, useDispatch, useSelector } from 'react-redux'
import { storeLiked } from '../../Redux/store';

function WishList() {
  // const useDispatch = createDispatchHook()
  const likedItem = useSelector(state => state.reducerAddWish)
  console.log(likedItem)
  return (
    <div>WishList</div>
  )
}

export default WishList