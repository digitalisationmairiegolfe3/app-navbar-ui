import { GetterTree } from "vuex";
import { RootState } from "@/store/types";
import { ProfilState } from "./types";
import { Profil } from "@/models/profil";

export const getters: GetterTree<ProfilState, RootState> = {
  getIsProfilVisible(state): boolean {
    return state.isProfilVisible;
  },
  getProfileMock(state): Profil[] {
    return state.profileMock
  }
};
