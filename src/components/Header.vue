<template>
  <div>
    <div class="header">
      <LeftHeader></LeftHeader>
      <MenuHeader></MenuHeader>
      <InfoHeader></InfoHeader>
    </div>
    <Aside v-show="isShowAside"></Aside>
  </div>
</template>

<script>
  import LeftHeader from './header/LeftHeader.vue'
  import MenuHeader from './header/MenuHeader.vue'
  import InfoHeader from './header/InfoHeader.vue'
  import Aside from './header/Aside.vue'
  export default {
    computed: {
      isShowAside () {
        return this.$store.state.isShowAside
      }
    },
    components: {
      LeftHeader,
      MenuHeader,
      InfoHeader,
      Aside
    }
  }
</script>

<style scoped>
  .header {
    width: 100%;
    background-color: #143f6d;
    border-bottom: 1px solid #cfd8dc;
    color: #ffffff;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.25rem;
    height: 10%;
  }

  aside {
    position: fixed;
    height: 100%;
    right: 0px;
    padding: 0.35rem;
    border-left: 1px solid #cfd8dc;
  }
</style>
