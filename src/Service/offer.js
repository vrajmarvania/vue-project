import Http from "../../Httpcommon";

export default new class Offer_Service {
    get_Offer(id) {
        return Http.get("/offer/" + id);
    }
    getall_Offer() {
        return Http.get("/offer/getall");
    }
    post_Offer(data) {
        console.log(data)
        return Http.post("/offer/insertOffer", data);
    }
    put_Offer(data) {
        console.log(data)
        return Http.put("/offer/updateOffer", data);
    }
    delete_Offer(id) {
        return Http.delete("/offer/" + id);
    }


}