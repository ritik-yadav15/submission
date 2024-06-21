import React from 'react'
import {useDispatch} from 'react-redux';
import { removePost } from '../store/actions';

const PostCard = () => {

    const dispatch = useDispatch();

    const handleRemove =()=>{
        dispatch(removePost(posts.id))
    }
  return (
    <div className='post-card'>
    <h2>{postMessage.title}</h2>
    <p>{post.body}</p>
    <button onClick={handleRemove}>&times;</button>
      
    </div>
  )
}

export default PostCard
