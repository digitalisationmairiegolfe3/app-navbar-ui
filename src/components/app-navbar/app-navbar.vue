<template>
  <b-navbar toggleable="md" class="nav-shadow p-0" variant="faded" type="light">
    <b-navbar-nav class="p-0">        
      <b-nav-item 
        @click="menuClickEvent(homePath)"
        class="icon-animation mx-2 p-0 d-flex align-items-center"
      >
        <span class="material-icons mouse-pointer">home</span>
      </b-nav-item>

      <b-nav-item 
        @click="$router.go(-1)"
        class="icon-animation mx-2 p-0 d-flex align-items-center"
      >
        <span class="material-icons mouse-pointer">arrow_back</span>
      </b-nav-item>
    </b-navbar-nav>
    <b-navbar-brand class="mx-2 p-0"
      ><span class="section-title">APP NAME</span></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto  align-items-center justify-content-around">
        <b-nav-text
          class="mouse-pointer px-5 py-0"
          @click="menuClickEvent(homePath)"
        >
          <span class="subsection-title">{{ structureName }}</span>
        </b-nav-text>
        <b-nav-text>{{ username }}</b-nav-text> 
        <b-nav-item>
            <b-avatar badge-variant="info" src="https://i.pravatar.cc/200?img=51"></b-avatar>  
        </b-nav-item>            
        <b-nav-item >
            <span id="tooltip_id" class="material-icons pt-16">power_settings_new</span>
            <b-tooltip target="tooltip_id" placement="bottom" variant="dark" boundary-padding="50">
                <b> Se déconnecter </b>
            </b-tooltip>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script lang="ts">
import Vue  from "vue";
// import { Vue } from 'vue-property-decorator';
import { mapGetters } from "vuex";
import commonVars from "../../common/core/commonVars";
// import { Utils } from "../../common/core/utils";
export default Vue.extend({
  name: "appNavbar",
  props: {
    exclude: { type: Array, default: () => [] },
  },
  data() {
    return {
      homePath: commonVars.HOME_PATH,
      home: commonVars.HOME,
      structureName: commonVars.STRUCTURE_NAME,
      username:"username"
    };
  },

  methods: {
    menuClickEvent(routeName: string) {
      this.$router.push({ path: routeName });
    },

    // displayedName(name: string): string {
    //   return Utils._pageMap.get(name)!;
    // },
  },
  computed: {
    ...mapGetters("routeRedirect", ["getRouteName"]),
    currentRouteName(): string {
      return this.$route.name!;
    },
    excluded() {
      return this.exclude.indexOf(this.$route.path.split('/').pop()) > -1;
    },
    tree() {
      return [''].concat(
        this.$route.path
          .split('/')
          .slice(1)
          .map((route) =>
            route
              .split('-')
              .map((word) => word[0].toUpperCase() + word.slice(1))
              .join(' '),
          ),
      );
    },
  },
});
</script>
<style src="./app-navbar.scss" lang="scss" scoped />