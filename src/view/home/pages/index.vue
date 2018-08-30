<template>
  <div class="account-home">
    <!-- <button @click="logout">退出登录</button> -->
    <div class="banner">
      <div class="banner-top">
        <!-- <span class="sp1">记账</span> -->
        <span class="sp1"></span>
        <span class="sp2">近30天应还(元)</span>
        <span class="sp3">{{(this.homeData.repayMoney || 0).toFixed(1)}}</span>
      </div>
      <div class="banner-bottom">
        <div class="date">
          <span class="date-sp1">最近还款日</span>
          <span class="date-sp2">{{moment(this.homeData.repayDate || undefined).format('YYYY-MM-DD')}}</span>
        </div>
        <div class="allmoney">
          <span class="allmoney-sp1">应还总额(元)</span>
          <span class="allmoney-sp2">{{(this.homeData.total30Money || 0).toFixed(1)}}</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="addBtn" @click="addOne">
        <span style="font-size:.5rem;font-weight:400;">+</span>
        <span>记一笔</span>
        <!-- <span style="float:right;">+</span> -->
      </div>
    </div>
    <div class="accounts">
      <div class="demo" v-if="!homeData.list || homeData.list.length === 0">
        <img src="../../../img/demo.png">
      </div>
      <card v-for="data in homeData.list" :key="data.id" :data="data" @repay="repay" style="margin: .2rem 0;"></card>
    </div>
  </div>
</template>
<script>
import crossEvent from  "@mfelibs/universal-framework/src/libs/apis/crossEvent";
import Card from '../widget/card'
import moment from 'moment'
export default {
  props: {user: Object},
  components: {Card},
  data() {
    return {
      moment,
      homeData: {}
    }
  },
  created () {
    let vm = this
    vm.$snc.enablePullDownRefresh({
      // theme: 'worldcup',
      success (response) {
        console.log('下拉刷新启用成功！')
      }
    });
    vm.$snc.onPullDownRefresh({
      success () {
        vm.loadData();
        setTimeout(() => {
          vm.$snc.stopPullDownRefresh({
            msg: `更新了${10}条信息`
          })
        }, 500)
      }
    })
    this.loadData();
    crossEvent.on('book.homeReload', data => {
      vm.$snc.pageReload();
    })
  },
  methods: {
    repay(data) {
      if (data.repaymentStatus) return;
      let vm = this
      this.$snc.fetch({
        url: 'http://res.txingdai.com/account/repay_status',
        method: 'POST',
        data: {
          id: data.id,
          status: 1
        },
        success(res) {
          if (res.code === 10200) {
            vm.loadData();
          }
        }
      })
    },
    loadData() {
      let vm = this
      this.$snc.fetch({
        url: 'http://res.txingdai.com/account/list',
        success(res) {
          if (res.code === 10200) {
            vm.homeData = res.data
          }
        }
      })
    },
    logout() {
      this.$snc.setGlobalStorage({
        user: {}
      })
      this.$snc.pageReload()
    },
    addOne () {
      if (this.user && this.user.phone) {
        this.$snc.URLNavigateTo({id: 'account-create', action: 'hybrid', title: '收入-借款'});
        return
      }
      this.$snc.URLNavigateTo({id: 'sign-up', actionType: 99, title: '注册'});
    }
  }
}
</script>
<style scoped>
  .banner-top {
    height: 4.2rem;
    background: linear-gradient(90deg, rgba(250, 210, 11, 1) , rgb(250, 210, 11));
  }
  .banner-top span {
    display: block;
    color: #000;
    text-align: center;
  }
  .banner-top .sp1 {
    font-size: .4rem;
    font-weight: 700;
    padding-top: 0.9rem;
  }
  .banner-top .sp2 {
    opacity: .5;
    font-size: .25rem;
    padding-top: 0.7rem;
  }
  .banner-top .sp3 {
    font-size: .7rem;
  }
  .banner-bottom {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 1.4rem;
    background: linear-gradient(90deg, rgba(250, 226, 63, 1) , rgb(250, 226, 63));
  }
  .banner-bottom span {
    display: block;
    color: #000;
    text-align: center;
  }
  .date .date-sp1, .allmoney .allmoney-sp1 {
    opacity: .5;
    font-size: .25rem;
  }
  .date .date-sp2, .allmoney .allmoney-sp2 {
    font-size: .35rem;
  }
  .addBtn {
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
    box-shadow: .01rem .03rem .2rem rgb(247, 172, 19);
  }
  .accounts {
    margin: .6rem .3rem;
  }
  .demo {
    width: 100%;
  }
  .demo>img {
    width: 100%;
  }
</style>
