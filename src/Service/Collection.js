import Http from "../../Httpcommon";

export default new class Student_Service {
    get_collection(id) {
        return Http.get("/category/" + id);
    }
    getall_collection() {
        return Http.get("/category/getall");
    }
    getall_collection2() {
        return Http.get("/category/getall2");
    }
    post_collecion(data) {
        console.log(data)
        return Http.post("/category/insertCategory", data);
    }
    put_collecion(data) {
        console.log(data)
        return Http.put("/category/update", data);
    }
    delete_collection(id) {
        return Http.delete("/category/" + id);
    }


}