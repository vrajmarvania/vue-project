import Http from "../../Httpcommon";

export default new class cart_Service {
    get_cart() {
        const token = localStorage.getItem('token')

        return Http.get("/cart/getcart/", {
            headers: {
                Authorization: token,
            }
        });
    }
    update_cart(data) {
        return Http.post("/cart/insertCart", data);
    }
    delete_cart(data) {
        return Http.delete("/cart/Remove", { data: data });
    }
}