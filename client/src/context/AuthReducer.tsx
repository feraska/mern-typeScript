
import { action,  actions,  share } from "./AuthContext";

const AuthReducer = (state:share, action:action) => {
    switch(action.type) {
        case actions.login:
          
            return {
                ...state,
                login:action.payload
            }
        case actions.logout:
            return {
                ...state,
                user:null,
                login:2,
            }    
        case actions.user:
            return {
                ...state,
                user:action.payload
            }

        case actions.get_genre:
            return {
                ...state,
               genre:action.payload

               }

        case actions.get_likes: {
            return {
                ...state,
               likes:action.payload

               }
        }
        case actions.like: 
        return {
            
                ...state,
                likes:[...state.likes,action.payload]
            }
            case actions.dislike:
                    return {
                        ...state,
                        likes:[...state.likes.filter((value)=>value!==action.payload)]
                    }       

               case actions.get_list:
                return {
                    ...state,
                    list:action.payload
                }
               case actions.add_list:
                if(!state.list.includes(action.payload)) {
                    return {
                        ...state,
                        list:[...state.list,action.payload]
                    }
                }
                return {
                    ...state
                }
                
                case actions.remove_list:
                    return {
                        ...state,
                        list:[...state.list.filter((value)=>value!==action.payload)]
                    }
              
            }
       

    }
export default AuthReducer;