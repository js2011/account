<template>
  <div class="main">
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
<style scoped>
  .main {
    max-width: 750px;
    margin: 0 auto;
    background: rgb(246, 246, 250) !important;
  }
</style>
