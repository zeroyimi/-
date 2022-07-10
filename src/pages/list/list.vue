<template>
  <div id="list">    
  <h3 class="addList">订单管理</h3>
  <el-button type="primary" class="addList" @click="dialogVisible = true">添加订单</el-button>

  <el-dialog
      title="请修改相关数据！"
      :visible.sync="dialogVisible"
      width="30%"
      center>  
      <el-form ref="form" :model="form" label-width="80px">
      <input type="hidden" :v-model="form.id=new Date().getTime()">
        <el-form-item label="名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="进货数量">
          <el-input v-model="form.num"></el-input>
        </el-form-item>
        <el-form-item label="进价">
          <el-input  v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="总计">
          <el-input :change="totalChange" v-model="form.total"></el-input>
        </el-form-item>        
        <el-form-item label="图片地址">
          <el-input  v-model="form.img"></el-input>
        </el-form-item>
        <!-- 本地上传图片方式 -->
        <!-- <el-form-item label="图片"> -->
          <!-- <el-upload
            action="#"
            :limit="1"
            list-type="picture-card"
            :auto-upload="false">
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{file}">
                <img
                  class="el-upload-list__item-thumbnail"
                  :v-model="form.img=file.url"
                  :src="file.url"  alt="">
              </div>
          </el-upload> -->
        <!-- </el-form-item> -->
        <el-form-item>
          <el-button type="primary"  @click="submitForm(form)">提交</el-button>
          <el-button @click="dialogVisible = false">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

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
            <el-button type="text" @click="open(item.id)" class="button">删除</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
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
  
  .search{
    width: 100%;
    height: 50px;
    border:1px solid salmon;
  }

  .bottom {
    position: relative;
    margin-top: 13px;
    line-height: 12px;
  }
  .time{
    position: absolute;
  }
  .time:nth-of-type(1){
    left: 0;
  }
  .time:nth-of-type(2){
    right: 0;
    font-size: 12px;
  }
  .button {
    margin-top: 20px;
    padding: 0;
    height: 30px;
    float: right;
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

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

  .addList{
    margin: 0;
    padding: 0;
    display: inline-block;
    width: 150px;
    height: 30px;
    margin: 30px 0;
  }

  .el-button.addList{
    position: absolute;
    top:0;
    right:300px;
  }
  
  h3{
    position: absolute;
    top:0px;
    left:230px;
    padding: 20px 30px;
  }
</style>

<script>

export default {
  data() {
    return {
      currentDate: new Date(),
      tableData:[],
      form: {
        id:'',
        img:'',
        name: '',
        num: '',
        price: '',
        total: '',
      },  
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false
    };
  },
  created(){
    // this.uuid = uuidv4().replaceAll('-',''); //获取随机id
    // console.log(uuid)
  },
  methods:{
     open(id) {
        this.$confirm('确定删除该订单？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });  
          for(var i=0;i<this.tableData.length;i++){
            if(this.tableData[i].id == id){
              this.tableData.splice(i,1)
            }
          }
          localStorage.setItem('localData',JSON.stringify(this.tableData))
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });      
    },
    submitForm(form){
      this.tableData.push(form)
      localStorage.setItem('localData',JSON.stringify(this.tableData))      
      this.dialogVisible = false
      this.form={
        id:'',
        img:'',
        name: '',
        num: '',
        price: '',
        total: '',
      }
    }
  },
  computed:{
    totalChange(){
      this.form.total = this.form.num*this.form.price
    }
  },
  mounted(){
    this.tableData = JSON.parse(localStorage.getItem('localData'))
    // console.log(this.tableData)
  },
}
</script>