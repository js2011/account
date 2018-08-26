<template>
  <div class="account-platform">
    <mt-cell v-for="plat in platforms" :key="plat.id" :title="plat.name" is-link @click.native="select(plat)">
      <span slot="icon">
        <img class="icon" :src="plat.logo">
      </span>
    </mt-cell>
  </div>
</template>
<script>
import crossEvent from  "@mfelibs/universal-framework/src/libs/apis/crossEvent";

export default {
  components: {},
  data() {
    return {
      platforms: []
    };
  },
  methods: {
    select(plat) {
      let vm = this;
      crossEvent.trigger('book.platform', {
        data: plat,
        success(res) {
          vm.$snc.navigateBack();
        }
      })
    }
  },
  created() {
    let vm = this;
    vm.$snc.onPullDownRefresh({
      success() {
        setTimeout(() => {
          vm.$snc.stopPullDownRefresh({
            msg: `更新了${10}条信息`
          });
        }, 500);
      }
    });
    this.$snc.fetch({
      url: "http://res.txingdai.com/account/products",
      success(res) {
        if (res.code === 10200) {
          vm.platforms = res.data;
        }
      }
    });
  }
};
</script>
<style scoped>
.icon {
  width: 0.5rem;
  padding-right: 0.3rem;
}
</style>
