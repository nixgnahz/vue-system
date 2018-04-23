<template>
  <div>
    <el-card class="box-card">
      <div slot="header">
        <Icon type="icecream"></Icon>
        <span>美食排序</span>
      </div>
      <draggable v-model="dishes" :options="dragOptions" :move="moveDish" @start="drag=true" @end="drag=false">
        <div class="row" v-for="(item, index) in dishes" :key="item.id">
          <span class="dish">{{item.name}}</span>
          <el-tag v-for="(itm, idx) in item.labels" :key="idx" closable size="mini" type="success" @close="removeLabel(index, idx)">{{itm}}</el-tag>
        </div>
      </draggable>
    </el-card>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  export default {
    data () {
      return {
        dragOptions:{
          animation: 120,
          scroll: true,
          group: 'sortlist',
          ghostClass: 'ghost-style'
        },
        dishes: [
          {
            id: 1,
            name: "火锅",
            labels: ["香辣", "麻辣", "重庆特产"]
          },
          {
            id: 2,
            name: "酸菜鱼",
            labels: ["鲜嫩", "爽快", "滑溜"]
          },
          {
            id: 3,
            name: "汉堡",
            labels: ["能量高", "大大大", "香喷喷"]
          },
          {
            id: 4,
            name: "烧烤",
            labels: ["撸串", "麻辣", "肉肉肉"]
          },
          {
            id: 5,
            name: "番茄炒蛋",
            labels: ["家常菜", "营养高", "美味"]
          },
          {
            id: 6,
            name: "麻辣烫",
            labels: ["大杂烩", "麻", "辣", "烫"]
          },
          {
            id: 7,
            name: "重庆小面",
            labels: ["麻辣", "早餐"]
          },
          {
            id: 8,
            name: "红烧肉",
            labels: ["肥而不腻", "鲜美", "肉肉肉"]
          }
        ]
      }
    },
    components: {
      draggable
    },
    methods: {
      moveDish (event) {
        console.log(event.draggedContext, event.relatedContext);
      },
      removeLabel (index, idx) {
        this.dishes[index].labels.splice(idx, 1);
      }
    }
  }
</script>

<style scoped>
  .row {
    padding: 0.25rem 0px;
    border-bottom: 0.02rem solid #eee;
    margin: 0.25rem 0px;
  }

  .row .dish {
    margin-right: 0.5rem;
  }

  .row .el-tag {
    margin-right: 0.25rem;
  }

  .el-card {
    width: 13rem;
    margin: 0.75rem 0.5rem;
  }
</style>
