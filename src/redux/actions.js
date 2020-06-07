function addAuth(authenticated) {
    return {
        type: 'ADD_AUTH',
        authenticated
    };
}

export default addAuth;