export default function groupReducer(state = {groups: {data: []}}, action) {
    switch (action.type) {
        case "FETCH_GROUPS":
            return {groups: action.payload}
        
        case "ADD_GROUP":
            return {
                ...state,
                groups: {data: [...state.groups.data, action.payload.data]}
            }

        case "ADD_CONTACT":
            const group = state.groups.data.find(obj => {
                return parseInt(obj.id) === action.payload.data.attributes.group_id
            })
            group.attributes.contacts = [...group.attributes.contacts, action.payload.data]
            return {
                ...state,
                groups: {data: state.groups.data.map(data => {
                    if (data.id === group.id) {
                        return group
                    } else {
                        return data
                    }
                })}
            }

        case "DELETE_CONTACT":
            const contactGroup = state.groups.data.find(obj => {
                return parseInt(obj.id) === action.payload.data.attributes.group_id
            })
            contactGroup.attributes.contacts = contactGroup.attributes.contacts.filter(contact => {
                return contact.id !== action.payload.data.id
            })
            return {
                ...state,
                groups: {data: state.groups.data.map(data => {
                    if (data.id === contactGroup.id) {
                        console.log("CG", contactGroup)
                        return contactGroup
                    } else {
                        return data
                    }
                })}
            }
        
        default:
            return state
    }
}