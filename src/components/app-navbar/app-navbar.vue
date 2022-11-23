<template>
  <b-navbar toggleable="md" class="nav-shadow  px-2 pr-4 py-0" variant="faded" type="light">
    <b-navbar-nav class="p-0">
      <div v-if="currentRouteName != home" class="icon-place"></div>
        
      <div v-if="currentRouteName == home"
        @click="menuClickEvent(homePath)"
        class="mx-2 p-0 d-flex align-items-center icon-animation"
      >
        <span class="material-icons mouse-pointer p-2">home</span>
      </div>
              

      <div v-if="currentRouteName == home"
        @click="$router.go(-1)"
        class="mx-2 p-0 d-flex align-items-center icon-animation"
      >
        <span class="material-icons mouse-pointer p-2">arrow_back</span>
      </div>
    </b-navbar-nav>
    <b-nav-text class="mx-2 p-0"
      ><span class="section-title">{{
        displayedName(currentRouteName)
      }}</span></b-nav-text
    >

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto  align-items-center justify-content-around">
        <b-nav-text
          class="mouse-pointer px-5 py-0"
          @click="menuClickEvent(homePath)"
        >
          <span class="subsection-title">{{ structureName }}</span>
        </b-nav-text>
        <b-nav-item-dropdown right>
          <template #button-content>
            <b-avatar
              badge-variant="info"
              src="https://i.pravatar.cc/200?img=51"
            ></b-avatar>
            <b-nav-text class="pl-2 font-resize">username</b-nav-text>

          </template>

          <div v-if="currentRouteName == home">
            <b-dropdown-item @click="menuClickEvent(profilPath)">{{
              profilDisplayName
            }}</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
          </div>
          <b-dropdown-item href="#">Se déconnecter</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import commonVars from "../../common/core/commonVars";
import { Utils } from "../../common/core/utils";
export default Vue.extend({
  name: "appNavbar",
  data() {
    return {
      profilDisplayName: Utils._pageMap.get(commonVars.PROFIL),
      profil: commonVars.PROFIL,
      profilPath: commonVars.PROFIL_PATH,
      homePath: commonVars.HOME_PATH,
      home: commonVars.HOME,
      structureName: commonVars.STRUCTURE_NAME,
    };
  },

  methods: {
    ...mapActions("profil", ["setIsProfilVisible"]),

    menuClickEvent(routeName: string) {
      this.$router.push({ path: routeName });
    },

    displayedName(name: string): string {
      return Utils._pageMap.get(name)!;
    },
  },
  computed: {
    ...mapGetters("routeRedirect", ["getRouteName"]),
    currentRouteName(): string {
      return this.$route.name!;
    },
  },
});
</script>
<style src="./app-navbar.scss" lang="scss" scoped />