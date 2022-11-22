import { ActionTree } from "vuex";
import { RootState } from "@/store/types";
import { RouteRedirectState } from "./types";

export const actions: ActionTree<RouteRedirectState, RootState> = {
  setRouteName(context, payload: string) {
    context.commit("setRouteName", payload);
  },
};
