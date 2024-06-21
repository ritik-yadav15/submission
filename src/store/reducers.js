import { combineReducers } from "redux";
import { 
     FETCH_POSTS_REQUEST,
     FETCH_POSTS_SUCCESS, 
     FETCH_POSTS_FAILURE, 
     REMOVE_POST ,
     TOGGLE_CARD_DESIGN
    } from "./actions";

const initialState = {
    posts:[],
    loading:null,
    currentPage:1,
    postsPerPage:6,
    error:null,
    cardDesign: 'default',


};

const postsReducer =(state= initialState,action)=>{
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return{
                ...state,
                loading:true,
                error:null,
            };
            case FETCH_POSTS_SUCCESS:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
            case FETCH_POSTS_FAILURE:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
           case REMOVE_POST:
            return{
                ...state,
                posts: state.posts.filter((post)=> post.id !== action.payload),
            }
            case TOGGLE_CARD_DESIGN:
                return{
                    ...state,
                    posts: state.cardDesign === 'default'? 'alternative' : 'default',
                }
    
        default:
            return state;
    }
}

export default combineReducers({
    posts:postsReducer,
})