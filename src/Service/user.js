import Http from "../../Httpcommon";

export default new class user_Service {

    login(data) {
        console.log(data)
        return Http.post("/login", data);
    }
    register(data) {
        console.log(data)
        return Http.post("/register", data);
    }
    getall() {
        return Http.get("/");

    }
    verify(id, token) {
        return Http.post("/verify/" + id + "/" + token);

    }

}