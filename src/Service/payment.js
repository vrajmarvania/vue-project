import Http from "../../Httpcommon";

export default new class Payment_Service {
    async setPayment(price) {
        return await Http.post("/payment", price);
    }
    async SavePayment(data) {
        return await Http.post("/payment/savepayment", data);
    }

}