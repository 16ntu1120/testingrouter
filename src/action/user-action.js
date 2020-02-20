import {userAddNameAction} from "./action-type";
import {userAddIdAction} from "./action-type";

export const addUser = (username) => dispatch =>{
    const state = {
        type:userAddNameAction ,
        payload : username
    }
    dispatch(state);
}
export const addUserId = (userid) => dispatch =>{
    const state = {
        type : userAddIdAction ,
        payload: userid
    }
    dispatch(state);
}

