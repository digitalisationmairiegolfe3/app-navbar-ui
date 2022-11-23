import Vue from "vue";
import { RootState } from "./types";
import Vuex, { StoreOptions } from "vuex";
import { profil } from "./modules/profil/index";
import { routeRedirect } from "./modules/route-redirect/index";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0",
  },
  modules: {
    profil,
    routeRedirect,
  },
  devtools: false,
};

export default new Vuex.Store<RootState>(store);
