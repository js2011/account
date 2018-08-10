<template>
  <div class="main">
    <!-- <feed-page v-if="firstAjax"></feed-page> -->
    <home-page></home-page>
  </div>
</template>
<script>
import HomePage from './pages'
export default{
  props: {
    firstAjax: Boolean
  },
  components: {HomePage}
}
</script>
<style scoped>
  .main {
    max-width: 750px;
    margin: 0 auto;
    background: rgb(240, 240, 244) !important;
  }
</style>
