import { EntriesState } from "./";

type EntriesActionType =
    | { type: 'UI - Open Sidebar' }

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
    
    switch (action.type) {
        // case 'UI - Open Sidebar':
        //     return {
        //         ...state,
        //     }

        default:
            return state;
    }

}