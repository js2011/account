<template>
  <div class="account-main">
    <create-page></create-page>
  </div>
</template>
<script>
import CreatePage from './pages'
export default{
  props: {
    firstAjax: Boolean
  },
  components: {CreatePage}
}
</script>
<style>
  .account-main {
    max-width: 750px;
    margin: 0 auto;
    background: rgb(246, 246, 250) !important;
  }
  .account-main .loan-input .mint-cell-wrapper {
    color: rgb(231, 45, 54);
    font-size: .4rem;
  }
</style>
