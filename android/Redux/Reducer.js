// Actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// Action creators
export const increment = (item, price) => ({
    type: INCREMENT,
    payload:{
        item:item,
        price:price
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
    counter: []
}

// Root reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: action.payload
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