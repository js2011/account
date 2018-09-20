<template>
  <div class="account-personal">
    <div class="part-1">
      <div class="banner">
        <img src="../../../img/banner.png">
        <div class="head">
          <img src="../../../img/head.png">
          <span class="user">{{user.phone || ''}}</span>
          <span class="title">年度会员</span>
        </div>
      </div>
      <div class="info">
        <mt-cell title="给APP评论" is-link @click.native="jump(1)"></mt-cell>
        <mt-cell title="意见反馈" is-link @click.native="jump(2)"></mt-cell>
        <mt-cell title="版本号" is-link @click.native="jump(3)"></mt-cell>
      </div>
    </div>
    <div class="part-2">
      <mt-button class="logout" size="large" @click="logout">{{user.phone ? '退出登录' : '登录'}}</mt-button>
    </div>
  </div>
</template>
<script>
import crossEvent from  "@mfelibs/universal-framework/src/libs/apis/crossEvent";
export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    jump(type) {
      let vm = this;
      switch (type) {
        case 1:
          // window.location = 'weixin://';
          vm.$snc.openUrl();
          break;
        case 2:
          vm.$snc.URLNavigateTo({id: 'feedback', action: 'hybrid', title: '意见反馈'});
          break;
        case 3:
          vm.$snc.URLNavigateTo({id: 'about', action: 'hybrid', title: '关于'});
          break;
      }
    },
    logout() {
      let vm = this;
      if (this.user && this.user.phone) {
        this.$snc.setGlobalStorage({
          user: {}
        });
        crossEvent.trigger('book.homeReload', {
          data: {},
          success(res) {
            vm.$snc.pageReload();
          }
        });
      } else {
        this.$snc.URLNavigateTo({id: 'sign-up', actionType: 99, title: '注册'});
      }
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
    crossEvent.on('book.signIn', data => {
      vm.$snc.pageReload();
    })
  }
};
</script>
<style scoped>
.part-1,
.part-2 {
  background: #fff;
}
.banner {
  width: 100%;
  position: relative;
}
.banner>img {
  width: 100%;
}
.banner .head {
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 2.2rem;
  text-align: center;
}
.head>img {
  width: 100%;
}
.head .user {
  display: block;
  margin-top: 0.1rem;
}
.head .title {
  font-size: .25rem;
  font-weight: 500;
  vertical-align: super;
}
.logout {
  background: #fff;
  border-radius: 0;
  color: #ef4f4f;
  font-size: .35rem;
  margin: 1rem 0;
  box-shadow: none;
}
</style>
