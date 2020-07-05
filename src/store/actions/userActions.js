const setUser = (userData) => {
    return {
        type: 'SET_USER',
        payload: userData
    }
}

const addUser = (userData) => {
    return {
        type: 'ADD_USER',
        payload: userData
    }
}

const logout = (userData) => {
    return {
        type: 'LOG_OUT',
        payload: userData
    }
}

export default {
    login : setUser,
    logout : logout,
    register: addUser
}