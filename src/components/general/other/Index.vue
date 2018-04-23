<template>
  <div>
    <Scale></Scale>
    <el-row>
      <Card></Card>
      <Rate></Rate>
    </el-row>
    <Drag></Drag>
  </div>
</template>

<script>
  import Scale from './Scale.vue'
  import Card from './Card.vue'
  import Rate from './Rate.vue'
  import Drag from './Drag.vue'
  export default {
    components: {
      Scale,
      Card,
      Rate,
      Drag
    }
  }
</script>

<style scoped>
  .el-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
