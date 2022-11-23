import { ActionTree } from "vuex";
import { RootState } from "@/store/types";
import { ProfilState } from "./types";
import { ProfileService } from "@/services/profile.service";

export const actions: ActionTree<ProfilState, RootState> = {
  setIsProfilVisible(context, payload: boolean) {
    context.commit("setIsProfilVisible", payload);
  },

  retrieveProfile(context){
    ProfileService.getInstance("")
    .retrieveProfile()
    .then((value)=> {
      if (value.data){
        context.commit("setProfile", value.data)
      }
    })
    .catch((reason)=> {
      console.log(reason)
    })
  }
};
