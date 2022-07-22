// Actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// Action creators
export const increment = (title, price) => ({
    type: INCREMENT,
    payload:{
        item:title,
        price: price, 
    },
})

export const decrement = () => ({
    type: DECREMENT,
})

export const reset = () => ({
    type: RESET
})

// Initial state
const initialState = {
    counter: null
}
const DataState = {
   data:[]
}

// Root reducer
const rootReducer = (state = initialState, action, dState = DataState) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
                ...dState,
                     data: action.payload
            }
        case DECREMENT:
            return {
                    ...state,
                    counter: state.counter - 1
                }
                case RESET:
            return {
                ...state,
                counter: 0
            }
        default:
            return state
    }
}

export default rootReducer