export const addContact = (contact, groupId) => {

    return(dispatch) => {
        fetch(`http://localhost:3000/groups/${groupId}/contacts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        })
        .then(resp => resp.json())
        .then(group => dispatch({type: "ADD_CONTACT", payload: group}))
    }
}