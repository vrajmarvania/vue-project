import Http from "../../Httpcommon";

export default new class Search_Service {
    get_all(data, q) {
        // alert('1')
        var qu = '';
        console.log(q);
        if (data.available) {
            qu += "&available=true"
        }
        if (data.CategoryName.length != 0) {
            qu += "&CategoryName=" + data.CategoryName.join(',')

        }
        if (data.price.length != 0) {
            qu += "&maxPrice=" + data.price[1] + "&minPrice=" + data.price[0]

        }
        if (q == undefined) {
            q = ''
        }
        console.log(qu)

        return Http.get('/search/all/?q=' + q + qu);
    }
}