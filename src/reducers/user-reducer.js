import { userAddNameAction, userAddIdAction } from "../action/action-type";

const state = {
    userName: [],
    userId: []
}
const userReducer = (mstate = clone(state), action) => {
    switch (action.type) {
        case userAddNameAction:
            mstate.userName.push(action.payload);
            return clone(mstate);
        case userAddIdAction:
            mstate.userId.push(action.payload);
            return clone(mstate);
        default:
            return clone(mstate);
    }
}

export default userReducer;
const clone = (obj) => (JSON.parse(JSON.stringify(obj)));
