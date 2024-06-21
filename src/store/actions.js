export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST"
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE"
export const REMOVE_POST = "REMOVE_POST"
export const TOGGLE_CARD_DESIGN= "TOGGLE_CARD_DESIGN"

export const fetchPostRequest =()=>({
type:FETCH_POSTS_REQUEST,
});

export const fetchPostSuccess =(posts)=>({
type: FETCH_POSTS_SUCCESS,
payload:posts

});

export const fetchPostFailure =(error)=>({
type:FETCH_POSTS_FAILURE,
payload:error
});

export const removePost =(postId)=>({
type:FETCH_POSTS_REQUEST,
payload:postId
});

export const toggleCardDesign =()=>({
type:TOGGLE_CARD_DESIGN,

});

