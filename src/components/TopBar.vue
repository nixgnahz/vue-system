<template>
  <div>
    <div class="top_bar">
      <span>{{item.name}}</span>
      <breadcrumb>
        <breadcrumb-item v-for="itm in item.menu" :key="itm">{{itm}}</breadcrumb-item>
      </breadcrumb>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style scoped>
  .top_bar {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0.5rem;
  }

  .top_bar>span {
    font-size: 0.5rem;
    font-weight: 700;
  }
</style>
