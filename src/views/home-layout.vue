<template>
  <div class="wrapper d-flex align-items-stretch">
    <app-sidebar
      :menus="sidebarItems"
      :showmenu="showmenu"
      :isOpen="isOpen"
      :showSide="showSide"
    >
    </app-sidebar>
    <div id="content" class="">
      <app-navbar />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import appNavbar from '../components/app-navbar/app-navbar.vue';
import appSidebar from '../components/app-sidebar/SideBar.vue'
// import { Vue } from 'vue-property-decorator';

export default Vue.extend({
  name: 'homeLayout',
  components: {
    appNavbar,
    appSidebar
  },
  data() {
    return {
      showmenu: false,
      isOpen: false,
      showSide: true,
      sidebarItems: [
        {
          link: "/settingsOrchestre",
          titleMenu: "SettingsOrchestre",
          menuIcon: "fa-face",
        },
        {
          link: "/featuresOrchestre",
          titleMenu: "Features",
          menuIcon: "streetview",
          subMenus: [
            {
              title: "PagesOrchestre",
              link: "/pagesOrchestre",
              icon: "streetview",
            },
            {
              title: "ElementsOrchestre",
              link: "/elementsOrchestre",
              icon: "streetview",
            },
          ],
        },
        {
          link: "/ServicesOrchestre",
          titleMenu: "Services",
          menuIcon: "face",
          subMenus: [
            {
              title: "App Design Orchestre",
              link: "/app-designOrchestre",
              icon: "account_circle",
            },
            {
              title: "Web Design Orchestre",
              link: "/web-designOrchestre",
              icon: "work",
            },
          ],
        },
        {
          link: "/OverviewOrchestre",
          titleMenu: "OverviewOrchestre",
          menuIcon: "settings",
        },
        {
          link: "/Test",
          titleMenu: "Test",
          menuIcon: "settings",
          subMenus: [
            {
              title: "Test 0",
              link: "/test-0",
              icon: "account_circle",
            },
            {
              title: "Test 1",
              link: "/test-1",
              icon: "work",
            },
          ],
        },
      ],
    };
  },
});
</script>

<style src="./home-layout.scss" lang="scss" scoped />
