import {createStore} from 'redux'

const INITIAL_STATE = {
    data: [
        'Estudar React.js'
    ]
}

//REDUCER
function toDo(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_TASK':
            return{
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ]
            }

        case 'REMOVE_TASK':
            const newState = state.data.filter(task => task !== action.payload)
            return{
                data: newState
            }

        default:
            return state
    }
}

const store = createStore(toDo)

export default store