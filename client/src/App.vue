<template>
  <div class="app-container">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class App extends Vue {
  name: string = "App";
  mounted() {
    console.log("start app");
  }
}
</script>
<style lang="less" scoped>
.app-container {
  width: 100%;
  height: 100%;
  background-color: #424250;
}
</style>


