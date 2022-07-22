
import {
    INCREMENT,
    DECREMENT
} from './Types';

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});