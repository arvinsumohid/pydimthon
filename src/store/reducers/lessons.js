const initialState = [
    {
        lessonId : '',
        chapterNumber : '',
        title : '',
        content : ''
    }
]

const lessons = (state = initialState, action) => {
    switch( action.type ) {
        case 'ADD_LESSON' : {
            state.push(
                action.payload
            )

            return state
        }

        case 'UPDATE_LESSON' : {
            const [lessonId, chapterNumber, title, content] = action.payload
            state = {...state, ...( state.lessonId === lessonId && {chapterNumber, title, content})}

            return state
        }

        case 'DELETE_LESSON' : {
            const [lessonId] = action.payload
            state = state.filter(lesson => lesson.lessonId !== lessonId)

            return state
        }

        default :
            return state
    }
}

export default lessons