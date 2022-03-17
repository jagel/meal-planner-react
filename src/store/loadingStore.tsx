import { Action, createStore, Reducer } from 'redux';
// -----------------

// STATE - This defines the type of data maintained in the Redux store.
export interface LoadingState{
    loadingCounter:number;
    isLoading:boolean;
}

export enum LoadingType {
    Show = "SHOW_LOADING",
    Hide = "HIDE_LOADING"
};

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

export interface ShowLoadingAction { type: LoadingType.Show }
export interface HideLoadingAction { type: LoadingType.Hide }

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type LoadingAction = ShowLoadingAction | HideLoadingAction;

const initialState = { loadingCounter : 0, isLoading: false } as LoadingState;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    showLoading: () => ({ type:  LoadingType.Show } as ShowLoadingAction),
    hideLoading: () => ({ type: LoadingType.Hide } as HideLoadingAction)
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<LoadingState> = (state: LoadingState | undefined, incomingAction: Action): LoadingState => {
    if (state === undefined) {
        return initialState;
    }

    const action = incomingAction as LoadingAction;
    switch (action.type) {
        case LoadingType.Show:
            let counting = ++state.loadingCounter;
            return { loadingCounter : counting, isLoading: counting > 0 };
        case LoadingType.Hide:
            let loadingDecrease = --state.loadingCounter;
            if(loadingDecrease < 0) 
                loadingDecrease = 0;
            return { loadingCounter : loadingDecrease, isLoading: loadingDecrease == 0 };
        default:
            return state;
    }
};


export const store = createStore(reducer, initialState )