const initialState = {
    mainState : ''
}

export const mainReducer = (state = initialState, action ) => {

    switch (action.type) {
        case 'UPDATE_VALUE' :
            return {
                ...state,
                mainState : action.payload
            }
        default:
            return state;
    }
}