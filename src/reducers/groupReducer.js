export default function groupReducer(state = {groups: {data: []}, contacts: []}, action) {
    // debugger
    switch (action.type) {
        case "FETCH_GROUPS":
            return {groups: action.payload}
        
        case "ADD_GROUP":
            return {...state, groups: [...state.groups, action.payload]}

        case "ADD_CONTACT":
            return {
                
            }
        
        default:
            return state
    }
}