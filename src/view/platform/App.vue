<template>
  <div class="account-main">
    <plat-page></plat-page>
  </div>
</template>
<script>
import PlatPage from './pages'
export default{
  props: {
    firstAjax: Boolean
  },
  components: {PlatPage}
}
</script>
<style>
  .account-main {
    max-width: 750px;
    margin: 0 auto;
    background: rgb(246, 246, 250) !important;
  }
</style>
