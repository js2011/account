<template>
  <div class="personal-main">
    <personal-page></personal-page>
  </div>
</template>
<script>
import PersonalPage from './pages'
export default{
  props: {
    firstAjax: Boolean
  },
  components: {PersonalPage}
}
</script>
<style>
  .personal-main {
    max-width: 750px;
    margin: 0 auto;
    background: rgb(246, 246, 250) !important;
  }
  .account-personal .mint-cell-text {
    font-size: .33rem;
  }
  .account-personal .mint-cell:first-child .mint-cell-wrapper {
    background-image: none;
  }
  .account-personal .mint-cell:last-child {
    background-image: none;
  }
</style>
