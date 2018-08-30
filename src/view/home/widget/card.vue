<template>
  <div class="account-card">
    <div class="header">
      <img class="icon" :src="data.productIcon">
      <span class="title">{{data.productName}}</span>
    </div>
    <div class="content">
      <div class="money">
        <span class="super">{{(+data.repaymentMoney).toFixed(1)}}</span>
        <span class="sub">应还金额(元)</span>
      </div>
      <div class="date">
        <span class="super">{{moment(data.repaymentDate).format('YYYY-MM-DD')}}</span>
        <span class="sub">剩余还款日期</span>
      </div>
      <div class="option" @click="repay(data)">
        <span :class="data.repaymentStatus ? 'disabled' : ''">{{data.repaymentStatus ? '已还' : '设为已还'}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  props: {data: Object},
  data() {
    return {moment}
  },
  methods: {
    repay(data) {
      this.$emit('repay', data);
    }
  }
}
</script>
<style scoped>
  .account-card {
    color: rgb(118, 124, 137);
    background: #fff;
    border-radius: .1rem;
  }
  .header {
    margin: 0 .2rem;
    padding: .15rem 0;
    border-bottom: 1px solid rgb(247, 247, 250);
  }
  .header .icon {
    width: .4rem;
    height: .4rem;
    object-fit: cover;
    border-radius: 4px;
  }
  .header .title {
    font-weight: 500;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    padding: .35rem 0;
  }
  .content span {
    display: block;
  }
  .content .super {
    font-size: .35rem;
  }
  .content .sub {
    font-size: .25rem;
    opacity: .6;
  }
  .option .disabled {
    background: rgb(117, 173, 255);
  }
  .option span {
    width: 1.1rem;
    border-radius: .4rem;
    background: rgb(44, 123, 254);
    color: #fff;
    opacity: .8;
    font-size: .25rem;
    padding: .1rem .2rem;
  }
</style>
