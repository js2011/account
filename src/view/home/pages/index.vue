<template>
  <div class="account-home">
    <div class="banner">
      <div class="banner-top">
        <span class="sp1">记账</span>
        <span class="sp2">近30天应还(元)</span>
        <span class="sp3">{{this.homeData.repayMoney}}</span>
      </div>
      <div class="banner-bottom">
        <div class="date">
          <span class="date-sp1">最近还款日</span>
          <span class="date-sp2">{{moment(this.homeData.repayDate).format('YYYY-MM-DD')}}</span>
        </div>
        <div class="allmoney">
          <span class="allmoney-sp1">应还总额(元)</span>
          <span class="allmoney-sp2">{{this.homeData.total30Money}}</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="addBtn" @click="addOne">
        <span>记一笔</span>
        <span style="float:right;">+</span>
      </div>
    </div>
    <div class="accounts">
      <card v-for="data in homeData.list" :key="data.id" :data="data" style="margin: .2rem 0;"></card>
    </div>
  </div>
</template>
<script>
import Card from '../widget/card'
import moment from 'moment'
export default {
  components: {Card},
  data() {
    return {
      moment,
      homeData: {}
    }
  },
  created () {
    let vm = this
    vm.$snc.onPullDownRefresh({
      success () {
        setTimeout(() => {
          vm.$snc.stopPullDownRefresh({
            msg: `更新了${10}条信息`
          })
        }, 500)
      }
    })
    this.$snc.fetch({
      url: 'http://res.txingdai.com/account/list',
      success(res) {
        if (res.code === 10200) {
          debugger
          vm.homeData = res.data
        }
      }
    })
  },
  methods: {
    addOne () {
      this.$snc.URLNavigateTo({id: 'sign-up', action: 'hybrid', title: '注册'})
    }
  }
}
</script>
<style scoped>
  .banner-top {
    height: 4.2rem;
    background: linear-gradient(90deg, rgba(252, 80, 39, 0.9) , rgb(252, 120, 31));
  }
  .banner-top span {
    display: block;
    color: #fff;
    text-align: center;
  }
  .banner-top .sp1 {
    font-size: .4rem;
    font-weight: 700;
    padding-top: 1.1rem;
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
    background: linear-gradient(90deg, rgba(252, 96, 55, 0.9) , rgb(240, 132, 48));
  }
  .banner-bottom span {
    display: block;
    color: #fff;
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
    color: #fff;
    margin: 0.3rem;
    padding: 0 .4rem;
    border-radius: 0.1rem;
    background: linear-gradient(90deg, rgb(43, 121, 253) , rgba(42, 70, 212, 0.902));
    font-size: .35rem;
    font-weight: 700;
    text-align: center;
    border-right: 1px solid rgba(42, 70, 212, 0.902);
    box-shadow: .01rem .03rem .2rem rgb(112, 159, 241);
  }
  .accounts {
    margin: .6rem .3rem;
  }
</style>
