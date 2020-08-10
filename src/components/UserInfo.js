class UserInfo {
    constructor(userName, userJob) {
        this._name = document.querySelector(userName);
        this._job = document.querySelector(userJob);
        this._popupName = document.querySelector(".name");
        this._popupJob = document.querySelector(".job");
        this._profileName = document.querySelector(".profile__name");
        this._profileJob = document.querySelector(".profile__profession");
    }

    getUserInfo() {
        this._popupName.value = this._profileName.textContent;
        this._popupJob.value = this._profileJob.textContent;
    }

    setUserInfo({ userName, userJob }) {
        this._name.textContent = userName;
        this._job.textContent = userJob;
    }
}

export default UserInfo