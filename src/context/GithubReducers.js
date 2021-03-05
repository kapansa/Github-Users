import { SEARCH_USERS } from "./Types";

const GithubReducer = ( state, action ) => {
    switch(action.type){
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}

export default GithubReducer;