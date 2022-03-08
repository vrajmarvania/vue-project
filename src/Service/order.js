import Http from "../../Httpcommon";

export default new class order_Service {
    get_order() {
        return Http.get("/order/getorder/");
    }
    add_order(data) {
        // data.Payment_Id = 8484344484
        return Http.post("/order/insertOrder", data);
    }
    getallorder() {
        console.log('getallorder')
        return Http.get("/order/get");
    }
    getOrderbyId(id) {
        return Http.get("/order/" + id)
    }


}