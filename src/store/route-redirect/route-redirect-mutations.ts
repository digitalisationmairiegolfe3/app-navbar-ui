import { MutationTree } from "vuex";
import { RouteRedirectState } from "./types";

export const mutations: MutationTree<RouteRedirectState> = {
  setRouteName(state, payload: string) {
    state.routeName = payload;
  },
};
