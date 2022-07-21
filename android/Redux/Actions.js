
import {
    INCREMENT,
    DECREMENT
} from './Types';

export const increment = (item) => ({
    type: INCREMENT,
    payload:item
});

export const decrement = () => ({
    type: DECREMENT
});