import axios from "axios";

const songBaseURL = "http://localhost:8080/api/v1/songs";

class songService {

    getSongs () {
        return axios.get(songBaseURL);
    }

    createSong (song) {
        return axios.post(songBaseURL, song);
    }

    getSongById(songId) {
        return axios.get(songBaseURL + "/" + songId);
    }

    updateSong(song, songId) {
        return axios.put(songBaseURL + "/" + songId, song);
    }

    deleteSong(songId) {
        return axios.delete(songBaseURL + "/" + songId);
    }

}
export default new songService();
