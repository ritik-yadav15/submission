import React from 'react'
import {useState , useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchPostFailure, fetchPostSuccess,fetchPostRequest} from '../store/actions'
import PostCard from './PostCard'
import axios from 'axios'

export const PostList = () => {
    const dispatch = useDispatch();
    const {posts, loading , currentPage, error, postsPerPage} = useSelector((state)=> state.posts)

    useEffect(()=>{
        dispatch( fetchPostRequest())
     axios.get("https://jsonplaceholder.typicode.com/posts")
     .then((res)=>{
           dispatch(fetchPostSuccess(res.data))
           console.log(res.data)
     }).catch((error)=>{
        dispatch(fetchPostFailure(error.message))
     })
    },[dispatch])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost * postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)

    if (loading) return <div>loading...</div>;
    if (error) return <div>Error:{error}</div>;

  return (
   

   

    <div className='post-list'>
        {currentPosts.map((post)=>(
            <PostCard key={post.id} post={post}/>
        ))}
    </div>
    
  )
}
