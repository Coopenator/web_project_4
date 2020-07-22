class UserInfo {
    constructor(userName, userJob) {
        this._userNameElement = document.querySelector(userName)
        this._userJobElement = document.querySelector(userJob)
        this._name = this._userNameElement.textContent;
        this._job = this._userJobElement.textContent;
    }

    getUserInfo() {
        return {
            name: this_name,
            job: this_job
        }
    }

    setUserInfo(name, job) {
        this._name = name;
        this._job = job;
        this._userNameElement = name;
        this._userJobElement = job;
    }
}

export default UserInfo