const initialState = {
    userCollection : [
        {
            userId: 1,
            schoolId: '10901337',
            fname: 'Arvin',
            lname: 'Sumohid',
            email: 'admin@pydimthon.com',
            password: 'admin123',
            type: 'Admin'

        }
    ],
    user : {},
    loggedIn : false,
    error : {
            status : false,
            message : ''
        },
    success : {
        status: false,
        message: ''
    },
    links : [
        {
            key : 'dashboard',
            to : '/',
            label : 'Dashboard',
            className : 'active'
        },
        {
            key : 'account',
            to : '/account',
            label : 'Account Settings',
            className : ''
        },
    ]
}

const user = (state = initialState, action) => {
    switch( action.type ) {
        case 'ADD_USER' : {
            const { email } = action.user
            const isExist = state.userCollection.find(user => (user.email === email ? true : false) )
            let count = state.userCollection.length
            let user = { ...action.user, userId : (++count) }
            
            if( isExist )
                state.error = {
                        status: true,
                        message: 'Email already Exist'
                    }
            else
                state.error = {
                    status: false,
                    message: 'Successfully Registered!'
                }


            if( state.error.status )
                return state

            state.userCollection.push(
                user
            )

            return state
        }

        case 'LOG_IN' : {
            const {email, password} = action.payload

            state.userCollection.map( user => {
                if( user.email === email && user.password === password ) {
                    state.user = {...user}
                    state.loggedIn = true;
                    state.error.status = false

                    return true
                }

                state.error.status = true
                return true
            });

            return state
        }

        case 'LOG_OUT' : {
            state.user = {}
            state.loggedIn = false

            return state
        }

        default :
            return state
    }
}

export default user