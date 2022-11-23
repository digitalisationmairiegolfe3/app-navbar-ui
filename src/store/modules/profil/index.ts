import { Module } from "vuex";
import { getters } from "./profil-getters";
import { actions } from "./profil-actions";
import { mutations } from "./profil-mutations";
import { ProfilState } from "./types";
import { RootState } from "@/store/types";

export const state: ProfilState = {
  isProfilVisible: false,
  profileMock : [],
};
export const profil: Module<ProfilState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
