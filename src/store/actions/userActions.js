const setUser = (userData) => {
    const {email, password } = userData
    const user = {
        email : email.value,
        password : password.value
    }
    return {
        type: 'LOG_IN',
        payload: user
    }
}

const addUser = (userData) => {
    const {schoolId, fname, lname, email, password } = userData
    const user = {
        userId : null,
        schoolId : schoolId.value,
        fname : fname.value,
        lname : lname.value,
        email : email.value,
        password : password.value
    }

    return {
        type: 'ADD_USER',
        user: user
    }
}

const logout = () => {
    return {
        type: 'LOG_OUT'
    }
}

export default {
    login : setUser,
    logout : logout,
    register: addUser
}