import axios from 'axios';

class SalutiService {

    getSaluti = () => {
        return axios.get("http://localhost:8080/api/saluti");
    }
}

export default new SalutiService();