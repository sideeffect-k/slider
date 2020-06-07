function reducer(state = {}, action) {
    if(action.type === 'ADD_AUTH') {
        return {
            ...state,
            authenticated: action.authenticated
        };
    }

    return state;
}

export default reducer;