import { AnyAction, createStore } from "redux";
import { HAPPY_BUTTON_CLICKED, REFRESH_BUTTON_CLICKED, SAD_BUTTON_CLICKED } from "./actions";

type Moment = {
    intensity: number,
    when: Date
}

export type State = {
    happyMoments: Moment[],
    sadMoments: Moment[],
}

const initialState = {
    happyMoments: [],
    sadMoments: [],
}

function reducer(currentState: State = initialState, action: AnyAction): State {
    switch (action.type) {
        case HAPPY_BUTTON_CLICKED:
            return {
                ...currentState,
                happyMoments: [...currentState.happyMoments, { intensity: action.payload.intensity, when: action.payload.when }]
            }
            break;
        case SAD_BUTTON_CLICKED:
            return {
                ...currentState,
                sadMoments: [...currentState.sadMoments,
                { intensity: action.payload.intensity, when: action.payload.when }]
            }
            break;
        case REFRESH_BUTTON_CLICKED:
            return {
                happyMoments: [],
                sadMoments: [],
            }
            break;
        default:
            return currentState
            break;
    }
}

const store = createStore(reducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
export default store