const initialState = {
    userCollection : [
        {
            userId: 1,
            schoolId: '10901337',
            fname: 'Arvin',
            lname: 'Sumohid',
            email: 'admin@pydimthon.com',
            password: 'admin123',

        }
    ],
    user : {},
    loggedIn : false,
    error : false
}

const user = (state = initialState, action) => {
    switch( action.type ) {
        case 'ADD_USER' : {
            state.userCollection.push(
                action.payload
            )

            state.user = {}
            state.loggedIn = false

            return state
            break;
        }

        case 'LOG_IN' : {
            const {email, password} = action.payload
            state.userCollection.map( user => {
                if( user.email === email.value && user.password === password.value ) {
                    state.user = {user}
                    state.loggedIn = true;
                    state.error = false
                    console.log('yes')
                }

                state.error = true
            });

            return state
            // return state.map( user => user.email === action.email && user.password === user.password ? user : false )
            break;
        }

        case 'LOG_OUT' : {
            state.user = {}
            state.loggedIn = false

            return state
            break;
        }

        default :
            return state
    }
}

export default user