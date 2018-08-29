<template>
  <div class="account-feedback">
    <div class="part-1">
      <div class="logo">
        <img src="../../../img/head.png"> 
      </div>
    </div>
    <div class="part-2">
      <div class="info">
        <p>黄金钱包：v1.0.0</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {
    let vm = this;
    vm.$snc.onPullDownRefresh({
      success() {
        setTimeout(() => {
          vm.$snc.stopPullDownRefresh({
            msg: `更新了${10}条信息`
          });
        }, 500);
      }
    });
    vm.$snc.on('ready', data => {
      try {
        vm.user = data.data.user;
      } catch (error) {
        vm.user = {};
      }
    });
  }
};
</script>
<style scoped>
.part-1,
.part-2 {
  background: #fff;
  padding: .2rem;
}
.logo {
  width: 100%;
  text-align: center;
  padding: 1rem 0;
}
.logo img {
  width: 2rem;
}
.info {
  text-align: center;
}
</style>
