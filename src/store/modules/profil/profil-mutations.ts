import { Profil } from "@/models/profil";
import { MutationTree } from 'vuex';
import { ProfilState } from "./types";

export const mutations: MutationTree<ProfilState> = {
  setIsProfilVisible(state, payload: boolean) {
    state.isProfilVisible = payload;
  },

  setProfile(state, payload: Profil[]) {
    state.profileMock = payload
    // console.log(state.profileMock[0].first_name)
  }
};
