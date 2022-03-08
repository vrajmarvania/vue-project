import { createStore } from "vuex";
import Http from "../../Httpcommon";

export default createStore({
    state() {
        return {
            user: localStorage.getItem("user") || "",
            token: localStorage.getItem("token") || "",
            status: "",
            userdata: [],
            data: [{ id: 2, approved: true, username: "Tim" }]
        };
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
        },
        setUserData(state, userdata) {
            console.log(userdata);
            state.userdata = userdata;
        },
        remove_User(state) {
            state.userdata = [];
        },
    },
    getters: {
        isLoggedIn: (state) => !!state.token,
        authStatus: (state) => state.status,
        gettype: (state) => state.userdata.Type,
        getusername: (state) => state.userdata

    },
    actions: {
        getUser({ commit, state }) {
            if (state.token != null && state.token !== '') {
                Http.get("/getuser/" + state.token).then((response) => {
                    commit("setUserData", response.data);
                });
            }
        },
    },
});