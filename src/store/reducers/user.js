const initialState = {
    user_collection : [],
    user : [],
    loggedIn : false
}

const user = (state = initialState, action) => {
    switch( action.type ) {
        case 'ADD_USER' :
            state.user_collection.push(
                action.payload
            )

            state.user = {}
            state.loggedIn = false

            return state

        case 'LOG_IN' :
            state.user = action.payload
            state.loggedIn = true

            return state
            // return state.map( user => user.email === action.email && user.password === user.password ? user : false )

        case 'LOG_OUT' :
            state.user = {}
            state.loggedIn = false

            return state

        default :
            return state
    }
}

export default user