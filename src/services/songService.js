import axios from "axios";

const songBaseURL = "http://localhost:8080/api/v1/songs";

class songService {

    getSongs() {
        return axios.get(songBaseURL);
    }
}
export default new songService();
