export enum api {
    mainServer = "http://localhost:5000/api",
    loginMainServer = "http://localhost:5000/api/auth/login",
    registerMainServer = "http://localhost:5000/api/auth/register",
    logoutMainServer = "http://localhost:5000/api/auth/logout",
    findUser = "http://localhost:5000/api/user/find",
    addToList = "http://localhost:5000/api/user/addToList",
    removeFromList = "http://localhost:5000/api/user/removeFromList",
    like = "http://localhost:5000/api/user/like",
    dislike = "http://localhost:5000/api/user/dislike",
    getNotification = "http://localhost:5000/api/notification/getNotification",
    addNotification = "http://localhost:5000/api/notification/addNotification"

}