<template>
<!-- 使用element-ui来制作页面 -->
    <div id="app">
      <div class="content">
        <h3>登录页面</h3>
        <el-form 
        :model="ruleForm" 
        :rules="rules" 
        ref='ruleForm'
        label-width="180px" 
        class="demo-ruleForm">
          <el-form-item label="请输入用户名" prop="name">
            <el-input v-model="ruleForm.name" prefix-icon="el-icon-user-solid"></el-input>
          </el-form-item>
          <!-- prop="pass"绑定的规则 -->
          <el-form-item label="密码" prop="pass"> 
            <!-- prefix-icon="el-icon-lock" 添加表单图标 -->
            <el-input type="password" v-model="ruleForm.pass" prefix-icon="el-icon-lock" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()">提交</el-button>
            <el-button @click="resetForm()">重置</el-button>
            <el-button @click="register">注册</el-button>
          </el-form-item>
        </el-form>
      </div>      
      <div class="right"></div>
    </div>
 </template>
 <!-- mounted监听数据的跟新，一直会监测,打开页面就会进行更新 -->
<script>  
  export default {
    data() {      
      var validatePass = (rule, value, callback) => {
      if (value === '') {
          callback(new Error('请输入密码'));
        } 
      };
      return {
        ruleForm: {
          name: '',
          delivery: false,
          type: [],
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm() {
        console.log(this.$refs.ruleForm)
        // this.$refs.ruleForm.validate((valid) => {
          // if (valid) {         
            if(JSON.parse(localStorage.getItem('localData'))==''){
              alert('请先进行用户注册！')
              this.$router.push('/register')
              return false
            }
            localStorage.setItem("userInfo",JSON.stringify(this.ruleForm))
            this.$router.push('/home')
             
          // } else {
          //   console.log('提交错误!!');
          //   return false;
          // }
        // });
      },
      resetForm() {
        this.$refs.ruleForm.resetFields();
      },
      register(){
        this.$router.push("/register")
      }
    },
    mounted(){
      let info = JSON.parse(localStorage.getItem('registerInfo'))
      if(info){        
        this.ruleForm.name = info.name
        this.ruleForm.pass = info.pass
      }
    }
  }
</script>
<style scoped>
  #app{
    display: grid;
    grid-template-columns: 400px 1fr;
    position: relative;
    height: 800px;
  }

  h3{
    margin: 30px 0;
    text-align: center;
  }  

  .content{
    float: left;
    box-sizing: border-box;
    padding: 100px 0;
    width: 500px;
    height: 600px;    
  }

  .right{
    float: left;
    margin-left: 200px;
    background:url(../../assets/images/bg.png) no-repeat;
    background-size: 100%;
  }
  
  .btns{
    text-align: center;
  }
</style>
