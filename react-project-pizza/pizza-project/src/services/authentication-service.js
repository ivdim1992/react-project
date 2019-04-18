import {get,post,put,remove} from '../data/crud';

class AuthenticationService {
    constructor() {
        this.baseUrl = 'http://localhost:9999/auth';
        this.loginUrl = `${this.baseUrl}/signin`
        this.registerUrl = `${this.baseUrl}/signup`
    }   

    login(credentials) {
        return post(this.loginUrl,credentials);
    }

    register(credentials){
        return post(this.registerUrl,credentials)
    }
}
export default AuthenticationService;