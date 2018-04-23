<template>
  <div>
    <Form :model="formData" :label-width="80">
      <FormItem label="分享标题">
        <Input v-model="formData.title" placeholder="请输入分享标题" style="width:250px;"></Input>
      </FormItem>
      <FormItem label="分享描述">
        <Input v-model="formData.description" placeholder="请输入分享描述" style="width:250px;"></Input>
      </FormItem>
      <FormItem label="分享图片">
        <el-upload class="upload-demo" drag action="" multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em>
            <div class="el-upload__tip" slot="tip">图片尺寸建议比例1:1,如160*160像素，图片不能大于2M</div>
          </div>
        </el-upload>
      </FormItem>
       <Button type="ghost" size="large" @click.once="lastStep">上一步</Button>
       <Button type="primary" size="large" @click.once="nextStep">下一步</Button>
    </Form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        formData: {
          title: "",
          description: "",
          img: ""
        }
      }
    },
    methods: {
      lastStep () {
        this.$store.commit('decreaseCurrentStep')
      },
      nextStep () {
        for(var key in this.formData.required) {
          if(!this.formData.required[key]) {
            return;
          }
        }
        this.$store.commit('increaseCurrentStep')
      }
    }
  }
</script>

<style scoped>
  .ivu-form {
    margin-top: 1rem;
  }

  .ivu-btn {
    margin: 0rem 0.5rem 1.5rem;
  }
</style>
