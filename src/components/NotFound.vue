<template>
  <div class="boxes">
    <img :src="notFound"/>
    <h1>天啊，页面好像走丢了</h1>
    <p>出现了这个问题，也许是因为您访问了不正确的链接地址，但更可能是由于我们对程序做出了更新，没有及时通知您所造成的。</p>
    <div>
      您现在可以
      <router-link :to="{name: href}" replace>
        <Icon type="ios-home-outline" color="#0089dc" size="16"></Icon><span class="back_word">返回首页</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        notFound: require('../assets/notFound.png'),
        href: 'histogram'
      }
    }
  }
</script>

<style scoped>
  .boxes {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: rgb(20, 26, 72);
    color: white;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .boxes>img {
    width: 50%;
    margin-top: 2rem;
  }

  .boxes>h1 {
    margin: 1rem 0px;
  }

  .boxes>p {
    width: 75%;
    text-align: center;
  }

  .boxes>div {
    margin: 1rem 0px;
  }

  .boxes>a {
    cursor: pointer;
  }

  .back_word {
    color: #0089dc;
  }

  .ivu-icon {
    margin: 0px 0.1rem;
  }
</style>
