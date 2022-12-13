import { State } from "./store";

export function happyMomentsSelector(state: State) {
    return state.happyMoments;
} 
export function sadMomentsSelector(state: State) {
    return state.sadMoments;
} 