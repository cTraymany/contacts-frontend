export const addGroup = (data) => {
    return (dispatch) => {
        fetch("http://localhost:3000/groups", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(group => dispatch({type: "ADD_GROUP", payload: group}))
    }
}