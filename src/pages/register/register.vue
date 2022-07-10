<template>
<!-- 使用element-ui来制作页面 -->
    <div id="app">
      <div class="content">
        <h3>登录页面</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="180px" class="demo-ruleForm">
          <el-form-item label="请输入用户名" prop="name">
            <el-input v-model="ruleForm.name" prefix-icon="el-icon-user-solid"></el-input>
          </el-form-item>
          <!-- prop="pass"绑定的规则 -->
          <el-form-item label="密码" prop="pass"> 
            <!-- prefix-icon="el-icon-lock" 添加表单图标 -->
            <el-input type="password" v-model="ruleForm.pass" prefix-icon="el-icon-lock" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" prefix-icon="el-icon-lock"  autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item class="btns"> 
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
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
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
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
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {            
            localStorage.setItem("registerInfo",JSON.stringify(this.ruleForm))
            this.$router.push('/login')
            console.log('提交咯')
          } else {
            console.log('您输入的信息不正确！！！');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  #app{
    display: grid;
    grid-template-columns: 400px 1fr;
    position: relative;
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
