export default function groupReducer(state = {groups: [], contacts: []}, action) {
    switch (action.type) {
        case "FETCH_GROUPS":
            return {groups: action.payload}
        
        case "ADD_GROUP":
            return {...state, groups: [...state.groups, action.payload]}
        
        default:
            return state
    }
}