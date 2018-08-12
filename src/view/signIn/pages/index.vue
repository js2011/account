<template>
  <div class="sign-in-page">
    <span class="title">注册</span>
    <span class="info">请输入 {{18500181234}} 收到的验证码</span>
    <mt-field class="code" type="number" placeholder="验证码" v-model="code"></mt-field>
    <div class="next">
      <span class="get-code">获取验证码</span>
      <span class="sign-in">登录</span>
    </div>
  </div>
</template>
<script>
import MtField from "../components/field";

export default {
  components: {MtField},
  data () {
    return {
      code: ''
    }
  }
}
</script>
<style>
  .sign-in-page {
    padding: 0.3rem .5rem;
  }
  .sign-in-page>span {
    display: block;
  }
  .sign-in-page .title {
    font-size: .8rem;
    font-weight: 700;
  }
  .sign-in-page .info {
    margin: .1rem 0;
    color: rgb(128, 137, 158);
  }
  .sign-in-page .next {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .2rem 0;
  }
  .sign-in-page .next .get-code {
    color: rgba(32, 108, 255, .9);
  }
  .sign-in-page .next .sign-in {
    display: inline-block;
    text-align: center;
    width: 2.3rem;
    height: 1rem;
    line-height: 1rem;
    background: rgb(255, 215, 25);
    border-radius: .5rem;
    font-weight: 500;
  }
  .sign-in-page .code {
    margin: .5rem 0;
  }
  .sign-in-page .mint-cell-wrapper {
    background-image: none;
    border-bottom: 1px solid rgb(238, 242, 249);
    padding: 0;
  }
  .sign-in-page .mint-cell-title {
    width: 1.2rem;
  }
</style>
