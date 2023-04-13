import { createAction, createReducer, on } from "@ngrx/store";

const initialState = {
    userName: ""
}

const nameAction = createAction('name_typeup_action');

export const homepageReducer = createReducer(
    initialState, 
    on(nameAction, (state: any, action: any) => {
        let newName = "";
        if (action && action.payload) {
            newName = action.payload.name;
        }
        return {
            ...state,
            userName: newName
        };
    })
);