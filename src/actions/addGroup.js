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
    }
}