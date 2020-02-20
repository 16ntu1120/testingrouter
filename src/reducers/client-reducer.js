import { clientAddNameAction, clientAddIdAction } from "../action/action-type";
const state = {
    clientName: [],
    clientId: []
}
const clientReducer = (mstate = clone(state), action) => {
    switch (action.type) {
        case clientAddNameAction:
            mstate.clientName.push(action.payload)
            return clone(mstate);
        case clientAddIdAction:
            mstate.clientId.push(action.payload);
            return clone(mstate);
        default:
            return clone(mstate);
            
    }
}

export default clientReducer;
const clone = (obj) => (JSON.parse(JSON.stringify(obj)));
