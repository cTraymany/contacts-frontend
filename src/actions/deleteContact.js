export const deleteContact = (groupId, contactId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/groups/${groupId}/contacts/${contactId}`, {
            method: "DELETE"
        })
        .then(resp => {
            return resp.json()
        })
        .then(group => {
            // debugger
            return dispatch({type: "DELETE_CONTACT", payload: group})
        })
    }
}