import type { TActivity } from "../types";

export type TActivityActions = {
    type: 'save-activity',
    payload: {
        newActivity: TActivity
    }
} |
{
    type: 'set-activeId',
    payload: {
        id: TActivity['id']
    }
}

export type TActivityState = {
    activities: TActivity[],
    activeId: TActivity['id']
}

export const initialState: TActivityState = {
    activities: [],
    activeId: ''
}

export const activityReducer = (
    state: TActivityState = initialState,
    action: TActivityActions
) => {

    if(action.type === 'save-activity') {
        let updatedActivities: TActivity[] = []
        if(state.activeId) {
            updatedActivities = state.activities.map( 
                activity =>  activity.id === state.activeId ? action.payload.newActivity : activity
                )
        } else {
            updatedActivities = [...state.activities, action.payload.newActivity]
        }
        return {
            ...state,
            activities: updatedActivities,
            activeId: ''
        }
    }
    if(action.type === 'set-activeId') {
        return {
            ...state,
            activeId: action.payload.id
        }
    }

    return state
}