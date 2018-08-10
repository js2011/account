<template>
  <div class="account-card">
    <div class="header">
      <img src="" alt="">
      <span class="title">花借</span>
    </div>
    <div class="content">
      <div class="money">
        <span class="super">{{'1000.00'}}</span>
        <span class="sub">应还金额(元)</span>
      </div>
      <div class="date">
        <span class="super">{{25}}</span>
        <span class="sub">剩余还款日期</span>
      </div>
      <div class="option">
        <span>设为以还</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
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
  .option span {
    border-radius: .4rem;
    background: rgb(117, 173, 255);
    color: #fff;
    opacity: .8;
    font-size: .25rem;
    padding: .1rem .2rem;
  }
</style>
