const userReducer = (state = {
    username: '',
    firstName: '',
    lastName: ''
}, action) => {
    switch (action.type) {
        case "SIGN_IN": {
            state = {
                username: action.payload.username,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            };
            return state;
        }

        case "LOGOUT": {
            state = {
                username: '',
                firstName: '',
                lastName: ''
            };
            return state;
        }
        
        default:
            return state;
    }
}

export default userReducer;