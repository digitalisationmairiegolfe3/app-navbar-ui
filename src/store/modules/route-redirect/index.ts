import { Module } from "vuex";
import { getters } from "./route-redirect-getters";
import { actions } from "./route-redirect-actions";
import { mutations } from "./route-redirect-mutations";
import { RouteRedirectState } from "./types";
import { RootState } from "@/store/types";

export const state: RouteRedirectState = {
  routeName: "working-space",
};
export const routeRedirect: Module<RouteRedirectState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
