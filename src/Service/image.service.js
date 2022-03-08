import axios from "axios";

export default new class image_Service {
    uploadimage(data) {
        return axios.post("http://localhost:8000/image/upload-images", data);
    }

}