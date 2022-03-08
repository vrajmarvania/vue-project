import Http from "../../Httpcommon";

export default new class Product_Service {
    get_Product(id) {
        return Http.get("/product/" + id);
    }
    get_all() {
        return Http.get('/product/getall');
    }
    getsliderdata(data) {
        // data = {
        //     Q: {
        //         CategoryName: 'Wireless_Headphones'
        //     },
        //     S: {
        //         Date: -1
        //     }
        // }
        console.log(data)
        return Http.post('/product/getsliderdata', data);
    }
    post_Product(data) {
        console.log(data)
        return Http.post("/product/insert", data);
    }
    put_Product(data) {
        console.log(data)
        return Http.put("/product/update", data);
    }
    delete_Product(id) {
        console.log(id)
        return Http.delete("/product/delete/" + id);
    }
}