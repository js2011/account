<template>
  <div class="account-feedback">
    <div class="part-1">
      <mt-field class="feedback-text" placeholder="您的反馈对我们非常重要" type="textarea" rows="6" v-model="feedback"></mt-field>
    </div>
    <div class="part-2">
      <div class="sendBtn" @click="send">
        <span>发送</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      feedback: ''
    };
  },
  methods: {
    send() {
      let vm = this;
      this.$snc.showModal({
        title: '谢谢您的反馈~',
        success(data) {
          debugger
          vm.$snc.navigateBack();
        }
      });
    }
  },
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
  /* background: #fff; */
  padding: .2rem;
}
.feedback-text {
  /* border-radius: .1rem; */
}
.sendBtn {
  height: 1rem;
  line-height: 1rem;
  color: #000;
  margin: 0.3rem;
  padding: 0 .4rem;
  border-radius: 1rem;
  background: linear-gradient(90deg, rgb(247, 172, 19) , rgba(248, 228, 11, 1));
  font-size: .35rem;
  font-weight: 700;
  text-align: center;
  border-right: 1px solid rgba(248, 228, 11, 1);
  /* box-shadow: .01rem .03rem .2rem rgb(247, 172, 19); */
}
</style>
