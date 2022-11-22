import { GetterTree } from "vuex";
import { RootState } from "@/store/types";
import { RouteRedirectState } from "./types";

export const getters: GetterTree<RouteRedirectState, RootState> = {
  getRouteName(state): string {
    return state.routeName;
  },
};
