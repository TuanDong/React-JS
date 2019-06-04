import * as Types from './../constants/ActionType'
import * as Messg from './../constants/Message'

var initialState =Messg.MSG_WELCOME;

const messenger = (state = initialState,action) => {
    var mess = [...state];
    switch(action.type) {
        case Types.CHANGE_MESSENGER:
            mess = action.messenger;
            return mess;
        default : return [...state];
    }
}
export default messenger;