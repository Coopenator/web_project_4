class UserInfo {
    constructor(userName, userJob) {
        this._name = document.querySelector(userName);
        this._job = document.querySelector(userJob);
    }

    getUserInfo() {
        return {name: this._name.textContent, job: this._job.textContent};
    }

    setUserInfo({userName, userJob}) {
        this._name.textContent = userName;
        this._job.textContent = userJob;
    }
}

export default UserInfo