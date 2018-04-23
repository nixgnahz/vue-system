<template>
  <div class="container" :style='{"background-color": bgColor}'>
    <Form ref="formData" :model="formData" :rules="rules" style="width: 10rem;">
      <FormItem prop="user">
        <Input type="text" v-model="formData.user" placeholder="请输入用户名" size="large">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formData.password" placeholder="请输入密码" size="large">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem style="display: flex;">
        <Button type="primary" @click="handleSignIn" style="width: 10rem;margin: 0px;">登录</Button>
      </FormItem>
      <el-color-picker v-model="bgColor"></el-color-picker>
    </Form>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        bgColor: 'rgb(20, 26, 72)',
        formData: {
          user: "",
          password: ""
        },
        rules: {
          user: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
          password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
        }
      }
    },
    methods: {
      handleSignIn () {
        this.$refs.formData.validate((valid) => {
          if (valid) {
            axios.get('http://localhost:8080/static/login.json').then((res)=>{
              let data = res.data;
              if(data.user == this.formData.user && data.password == this.formData.password) {
                this.$store.commit("changeLogin")
                this.$Message.success('登录成功')
              }
            }).catch((error)=>{
              console.log(error)
            })
          }
        })
      }
    }
  }
</script>

<style scoped>
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }


</style>
