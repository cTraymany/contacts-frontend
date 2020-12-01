export const addContact = (contact, groupId) => {
    return(dispatch) => {
        fetch(`http://localhost:3000/groups/${groupId}/contacts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({contact: {...contact, group_id: groupId}})
        })
        .then(resp => resp.json())
        .then(group => {
            return dispatch({type: "ADD_CONTACT", payload: group})
        })
    }
}