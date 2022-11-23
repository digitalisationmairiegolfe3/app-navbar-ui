<template>
  <div class="container-fluid ">
    <div class="row">
      <div class="col-md-4 border-right py-5">
        <div class="d-flex align-items-center border-bottom">
          <b-icon icon="pencil-fill"></b-icon> &nbsp;&nbsp;&nbsp;&nbsp;
          <h5 class="text-right">Editer mon profil</h5>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <b-icon icon="chevron-right"></b-icon>
        </div>
      </div>
      <div class="col-md-8">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center ">
            <h3 class="text-right">Mon Profil</h3>
          </div>
          <div class="col-md-12">
            <div
              class="d-flex flex-column align-items-center text-center p-3"
            >
              <!-- <avatar-input :size="avatarSize" :accept="'image/*'" label="" type="file" ></avatar-input> -->
            </div>
          </div>
          <b-row>
            <b-col cols="6">

            </b-col>
            <b-col cols="6">

            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
     
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
       
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
       
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6">
             
            </b-col>
              
          </b-row> 
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  name: "mon-profil",
  components: { },
  props: {},
  data() {
    return {
      canEdit: false,
      avatarSize: "15rem",
      form: {
        nom: "KOUAMI",
        prenom: "Lucas",
        numeroTel: "222222222",
      },
    };
  },
  computed: {
    ...mapGetters("profil", ["getProfileMock"])
  },
  methods: {
    ...mapActions("routeRedirect", ["setRouteName"]),
    edit() {
      this.canEdit = false;
      this.setRouteName;
    },
    
    // avatarSet(){

    // }
    submit() {
      console.log(this.form);
    },
  },
  created(){
    // console.log(this.getProfileMock[0].first_name)
  }
});
</script>
<style src="./profil.scss" lang="scss" scoped />
