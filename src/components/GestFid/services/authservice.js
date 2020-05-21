class AuthenticationService {

    saveUserInfo = (username) => {
        sessionStorage.setItem('user', username);
    }

}

export default new AuthenticationService();