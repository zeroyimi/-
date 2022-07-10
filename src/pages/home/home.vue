<template>
  <div class="home">
    <h4>新上架新品展示</h4>
    <template>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in tableData" :key="item.id">
        <img :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>
  </template>
  
    <el-row>
      <el-col 
      :span="8" 
      v-for="(item, index) in tableData" 
      :key="item.id" 
      :offset="index%5!==0 ? 1 : 0">     
        <el-card :body-style="{ padding: '0px' }">
          <div class="imgbox"><img :src="item.img" class="image"/></div>
          <div style="padding: 14px 8px;">
            <span style="font-size:14px">{{item.name}}</span>
            <div class="bottom clearfix">
              <time class="time " >单价: <i style="color:#F56C6C;">{{ item.price }}</i>￥</time>
              <time class="time">库存: {{ item.num }}/朵</time>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        tableData:[]
      }
    },
    mounted(){
      this.tableData = JSON.parse(localStorage.getItem('localData'))
    }
  }
</script>

<style>
  h4{
    position: absolute;
    top:0px;
    left:230px;
    padding: 20px 30px;
  }
  .el-row{
    margin: 30px 10px;
  }
  i{
    font-style: normal;
  }
.el-col{
    width: 175px;
    margin-bottom: 25px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
    .imgbox{
    height: 160px;
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: #d5bbcb;
    line-height: 160px;
    overflow: hidden;
  }

  .image {
    width: 100%;
    display: block;
  }
  h4{
    padding: 20px;
  }
  .el-carousel{
    box-sizing: border-box;
    margin: 0 20px;
    overflow: hidden;
  }
  .el-carousel__item img {
    opacity: 0.75;
    line-height: 200px;
    width: 100%;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>