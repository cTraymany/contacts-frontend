export function fetchGroups() {
    fetch("http://localhost:3000/groups")
        .then(resp => resp.json())
        .then(data => console.log(data))
}