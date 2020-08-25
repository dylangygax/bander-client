const REACT_APP_API_URL = /*deployed url || */"http://localhost:4000/api/v1"

export default class UserModel {
    static create(data) {
        return fetch(`${REACT_APP_API_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }
}