import { clientAddNameAction } from "./action-type";
import { clientAddIdAction } from "./action-type";

export const addName = (name) => dispatch => {
    const state = {
        type: clientAddNameAction,
        payload: name
    }
    dispatch(state);
}
export const addId = (id) => dispatch => {
    const state = {
        type: clientAddIdAction,
        payload: id
    }
    dispatch(state);
}