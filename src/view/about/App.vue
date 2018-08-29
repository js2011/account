<template>
  <div class="about-main">
    <about-page></about-page>
  </div>
</template>
<script>
import AboutPage from './pages'
export default{
  props: {
    firstAjax: Boolean
  },
  components: {AboutPage}
}
</script>
<style>
  .about-main {
    max-width: 750px;
    margin: 0 auto;
    background: rgb(246, 246, 250) !important;
  }
</style>
