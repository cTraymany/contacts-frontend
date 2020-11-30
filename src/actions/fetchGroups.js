export function fetchGroups() {
    return (dispatch) => {
        fetch("http://localhost:3000/groups")
            .then(resp => resp.json())
            .then(groups => dispatch({
                type: "FETCH_GROUPS",
                payload: groups
            }))
    }
}