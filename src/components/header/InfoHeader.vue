<template>
  <div>
    <p class="unread_info">
      <Icon type="ios-bell-outline" size="25" color="#2d8cf0"></Icon>
      <span>5</span>
    </p>
    <dropdown>
      <a href="javascript:void(0)">
        <img class="user_profile" :src="profile"/>
        <span class="user_name">admin</span>
      </a>
      <dropdown-menu slot="list">
        <dropdown-item>
          <Icon type="alert"></Icon>Updates
          <span class="num alert">42</span>
        </dropdown-item>
        <dropdown-item>
          <Icon type="android-mail"></Icon>Messages
          <span class="num message">42</span>
        </dropdown-item>
        <dropdown-item divided>
          <Icon type="person"></Icon>profile
        </dropdown-item>
        <dropdown-item>
          <Icon type="ios-gear"></Icon>settings
        </dropdown-item>
        <dropdown-item>
          <Icon type="log-out"></Icon>
          <span class="logout" @click="changeLogin">Logout</span>
        </dropdown-item>
      </dropdown-menu>
    </dropdown>
    <span @click="changeAsideStatus">
      <Icon type="navicon-round" size="25" color="#2d8cf0" ></Icon>
    </span>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        profile: require("../../assets/profile.jpg")
      }
    },
    methods: {
      changeAsideStatus () {
        this.$store.commit("changeAside")
      },
      changeLogin () {
        this.$store.commit("changeLogin")
      }
    }
  }
</script>

<style scoped>
  div {
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: 0.5rem;
  }

  .unread_info  {
    position: relative;
    margin-right: 0.5rem;
  }

  .unread_info img {
    width: 0.7rem;
    height: 0.7rem;
  }

  .unread_info span {
    display: inline-block;
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 0.25rem;
    background-color: #f86c6b;
    position: absolute;
    right: -0.2rem;
    top: -0.2rem;
    font-size: 0.4rem;
    text-align: center;
    line-height: 0.55rem;
  }

  .user_profile {
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
  }

  .user_name {
    margin: 0px 0.5rem 0px 0.25rem;
  }

  a {
    display: flex;
    align-items: center;
  }

  .ivu-dropdown-item {
    font-size: 0.5rem !important;
  }

  .ivu-dropdown-menu li {
    margin: 0.5rem 0px;
  }

  .num {
    display: inline-block;
    font-size: 0.3rem;
    width: 0.8rem;
    height: 0.7rem;
    border-radius: 0.35rem;
    color: #fff;
    text-align: center;
    line-height: 0.7rem;
  }

  .alert {
    background-color: #63c2de;
  }

  .message {
    background-color: #4dbd74;
  }

  .logout {
    color: #2d8cf0;
  }
</style>
