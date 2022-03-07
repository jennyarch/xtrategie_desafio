

function reducer(state, action) {
    switch (action.type){
        case 'LOGIN':
            return {
                login: action.payload.login,
                password: action.payload.password,
            };
            case 'LOGOUT':
                    return {};
                default:
                    return state;
    }
}
export default reducer;