import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchPostRequest } from '../store/actions'

export const Pagination = () => {
    const dispatch = useDispatch();
    const {posts,  currentPage, postsPerPage} = useSelector((state)=> state.posts)

    const pageNumbers =[];
    for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
        pageNumbers.push(i);
        
    }
    const handleClick =(pageNumber) =>{
        dispatch(fetchPostRequest())
    }


  return (
    <div className='pagination'>
    {pageNumbers.map((number) => (
    <button key={number} onClick={()=> handleClick(number)}>{number}
        </button>
    ))}</div>
  )
}
