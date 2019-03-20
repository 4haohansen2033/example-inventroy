<template>
  <section class="login-wrapper">
    <div class="login-container">
      <div class="login-title">
        <i class="el-icon-info"></i>
        {{systemName}}
      </div>
      <el-form ref="login" :model="login" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="login.name" placeholder="请输入用户名" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="login.password" show-password placeholder="请输入密码" size="mini"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Login extends Vue {
  name: string = "Login";
  systemName: string = "库存管理系统";
  login: Object = {
    name: "",
    password: ""
  };
}
</script>
<style lang="less" scoped>
.login-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-title {
    font-size: 20px;
    color: white;
    height: 50px;
    text-align: center;
    margin: 10px auto;
  }
  .login-container {
    width: 400px;
    height: 400px;
    border-radius: 3px;
    background-color: rgba(66, 66, 80, 0.5);
  }
}
</style>
