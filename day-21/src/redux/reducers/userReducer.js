const initialState = {
    data: null,
    auth: false
}


export const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case "USER_DATA_UPDATE":
            return { ...state, data: action.payload, auth: true }

        case "USER_LOGOUT":
            return {  data: null, auth: false }
        default:
            return state
    }


}