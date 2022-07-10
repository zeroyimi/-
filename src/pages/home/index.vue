<template>
  <div id="main">
    <el-container style="height: 800px; border: 1px solid #eee;">
      <el-aside class="aside" width="200px" height="800px" style="">
        <a href="javascript:;"><img src="../../assets/images/main/logo.png" class="logo" alt=""></a>
        <el-menu class="aside_menu" :default-active="activeIndex" :router="true">
          <el-menu-item index="home"><i class="el-icon-s-data"></i>首页</el-menu-item>
          <el-menu-item index="chart"><i class="el-icon-data-line"></i>图表</el-menu-item>
          <el-menu-item index="list"><i class="el-icon-tickets"></i>订单</el-menu-item>
          <el-menu-item index="order"><i class="el-icon-s-operation"></i>列表</el-menu-item>
        </el-menu>
        <img class="bgs" src="../../assets/images/main/hua.png">
      </el-aside>

      <el-container>
      <el-header style="text-align: right; font-size: 12px">
      
        <template >
          <div class="demo-type" >
            <el-avatar :size="60" class="title" src="https://empty" @error="errorHandler">
              <img src="../../assets/images/title.jpg"/>
            </el-avatar>
          </div>
        </template>

        <el-button type="primary" @click="quit" style="background-color:#5c4d8e;color:#fff;border:none;">退出登录</el-button>
      </el-header>
        <el-main style="padding:0 30px;">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>

.main {
  background-color: #fff;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 80px;
}

.el-aside {
  position: relative;
  background: linear-gradient(#fef4dc, #b38cbd);
  border: 1px solid #fff;
}

.aside_menu {
  position: absolute;
  /* display: block; */
  width: 200px;
  top: 180px;
  left: 0;
  background-color: transparent;
  text-align: center;
}

.aside_menu .el-menu-item {
  color: #725b89;
  width: 180px;
  margin-left: 22px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}

.aside_menu li i[class^='el-icon'] {
  margin-right: 30px;
}

.bgs {
  position: absolute;
  bottom: 0;
  width: 101%;
}

.logo {
  position: absolute;
  width: 120px;
  top: 20px;
  left: 30px;
}

.is-active {
  width: 180px;
  margin-left: 20px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  color: #e5b7d0;
  box-shadow: 3px 3px 3px #d0adf0;
  background-color: #fff;
}
.el-menu-item:visited {
  width: 180px;
  margin-left: 22px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  color: #e5b7d0;
  box-shadow: 3px 3px 3px #d0adf0;
  background-color: #fff;
}

.el-menu-item:hover {
  width: 180px;
  margin-left: 22px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  color: #e5b7d0;
  box-shadow: 3px 3px 3px #d0adf0;
  background-color: #fff;
}

.el-menu-item:active {
  width: 180px;
  margin-left: 22px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  color: #e5b7d0;
  box-shadow: 3px 3px 3px #d0adf0;
}

.title{
  border-radius: 50%;
  overflow: hidden;
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  border:3px solid #5c4d8e;
}

.title img{
  border-radius: 50%;
  overflow: hidden;
  width: 60px;
  height: 60px;
}

.el-header{
  position: relative;
  background-color:transparent;
  height: 80px!important;
}

.el-header span{
  position: absolute;
  top:10px;
  right: 160px;
}

.el-header span:nth-child(1) img{
  right: 180px;
}

.el-header button{
  position: absolute;
  top:20px;
  right: 40px;
  text-align: left;
}

</style>

<script >
export default {
  data() {
    return {
      activeIndex:'home',
    }
  },
  methods: {
    quit(){
      this.$router.push('/login')
    },
    errorHandler() {
      return true
    }
  },
  mounted(){
    // 根据当前显示的路由对象，显示对应的菜单栏显示
    this.activeIndex = this.$route.name     
  }
};
</script>
