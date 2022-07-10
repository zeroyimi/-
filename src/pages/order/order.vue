<template>
  <div id="order">
    <h3 >列表管理</h3>
    <el-table
      v-loading="loading"
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%;"
      height="550px">
      <el-table-column
        fixed
        prop="name"
        align="center"
        label="名称"
        width="250">
      </el-table-column>
      <el-table-column
        prop="num"
        align="center"
        label="进货数量"
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        align="center"
        label="进价">
      </el-table-column>
      <el-table-column
        prop="total"
        align="center"
        label="总计"
        width="180">
      </el-table-column>
      <el-table-column 
        align="center">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入鲜花名称搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="请修改相关数据！"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>  
      <el-form 
      ref="form" 
      :model="form" 
      label-width="80px">
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
        <el-form-item>
          <el-button type="primary"  @click="submitForm()">提交</el-button>
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog
      title="确认要删除该列表吗？"
      :visible.sync="centerDialogVisible1"
      width="30%"
      center>
      <template slot-scope="scope">
        <el-button @click="centerDialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="deleteData()">确 定</el-button>
      </template>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
        return {
          form: {
            id:'',
            img:'',
            name: '',
            num: '',
            price: '',
            total: '',
          },
          tableData:[],          
          search: '',
          centerDialogVisible: false,
          centerDialogVisible1: false,
          deleteIndex:'',
          loading:true
        }
      },    
      methods: {      
        handleEdit(index, row) {    
          this.centerDialogVisible = true      
          // console.log(index, row);
          this.form.index = index
          this.form.id = row.id
          this.form.img = row.img
          this.form.name = row.name
          this.form.price = row.price
        },
        handleDelete(index, row) {
          this.centerDialogVisible1 = true 
          this.deleteIndex = index
        },
        submitForm(){
          // 此处的form一定要和el-form中ref='form'绑定的相同
           this.$refs.form.validate((valid) => {
            if (valid) {
              // 将修改的数据传递给数组
              this.tableData[this.form.index].img = this.form.img
              this.tableData[this.form.index].name = this.form.name
              this.tableData[this.form.index].num = this.form.num
              this.tableData[this.form.index].price = this.form.price
              this.tableData[this.form.index].total = this.form.price*this.form.num
              localStorage.setItem('localData',JSON.stringify(this.tableData))
            } else {
              console.log('提交错误！')
              return false
            }
          })
          this.centerDialogVisible = false
        },
        resetForm() {
          this.$refs.form.resetFields();
        },
        // 根据id删除对应的用户信息
        deleteData() {
          this.tableData.splice(this.deleteIndex,1)
          console.log(this.tableData)
          localStorage.setItem('localData',JSON.stringify(this.tableData))
          this.centerDialogVisible1 = false
        }
      },
      computed:{
        totalChange(){
          this.form.total = this.form.num*this.form.price
        }
      },
      created(){
        this.$nextTick(()=>{
          this.loading=false
        })
      },
      mounted(){
        // 从本地存储数据库获取信息
        this.tableData = JSON.parse(localStorage.getItem('localData'))
        this.tableData.forEach(item => {
          item.total = item.num*item.price
        });
      }    
  }
</script>
<style scoped>
  body{
    overflow: hidden;
  }
  
  h3{
    position: absolute;
    top:0px;
    left:230px;
    padding: 20px 30px;
  }
  .el-button{
    border:2px solid #b28bbd;
    background-color: #fff;
    color:#b28bbd;
  }
  .el-button--danger{
    background-color: #b28bbd;
    color:#fff;    
  }

  h5{
    text-align: center;
    font-weight: 500;
  }
</style>
