const addLesson = (userData) => {
    return {
        type: 'ADD_LESSON',
        payload: userData
    }
}

const updateLesson = (userData) => {
    return {
        type: 'UPDATE_LESSON',
        payload: userData
    }
}

const deleteLesson = (userData) => {
    return {
        type: 'DELETE_LESSON',
        payload: userData
    }
}

export default {
    addLesson,
    updateLesson,
    deleteLesson
}