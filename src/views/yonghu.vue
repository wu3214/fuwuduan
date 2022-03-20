<template>
  <!-- <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="id" label="用戶id" width="180"> </el-table-column>
    <el-table-column prop="name" label="用戶名" width="180"> </el-table-column>
    <el-table-column prop="registrationDate" label="注冊日期"> </el-table-column>
    <el-table-column prop="email" label="邮件"> </el-table-column>
    <el-table-column prop="phone" label="手机号码"> </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row,scope.column,scope.store)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row,scope.column,scope.store)">删除</el-button>
      </template>
    </el-table-column>
  </el-table> -->
  <el-table :data="tableData" border :key="Math.random()" ref="classTimeTable" stripe style="width: 100%" max-height="780">
    <!-- <el-table-column type="selection"></el-table-column> -->
    <el-table-column label="用户id" width="160">
      <template slot-scope="scope">
        <!-- <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.id"></el-input> -->
        <!-- <span v-show="!scope.row.show">{{scope.row.id}}</span> -->
        <span>{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column label="昵称" >
      <template slot-scope="scope">
        <el-input
          placeholder="请输入内容"
          v-show="scope.row.show"
          v-model="scope.row.name"
        ></el-input>
        <span v-show="!scope.row.show">{{ scope.row.name }}</span>
      </template>
    </el-table-column>

    <el-table-column label="账号（手机）">
      <template slot-scope="scope">
        <el-input
          placeholder="请输入内容"
          v-show="scope.row.show"
          v-model="scope.row.phone"
        ></el-input>
        <span v-show="!scope.row.show">{{ scope.row.phone }}</span>
      </template>
    </el-table-column>
    <el-table-column label="email">
      <template slot-scope="scope">
        <el-input
          placeholder="请输入内容"
          v-show="scope.row.show"
          v-model="scope.row.email"
        ></el-input>
        <span v-show="!scope.row.show">{{ scope.row.email }}</span>
      </template>
    </el-table-column>
    <el-table-column label="password">
      <template slot-scope="scope">
        <el-input
          placeholder="请输入内容"
          v-show="scope.row.show"
          v-model="scope.row.password"
        ></el-input>
        <span v-show="!scope.row.show">{{ scope.row.password }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope" fixed='right'>
        <!-- <el-button @click="scope.row.show =true">编辑</el-button> -->
        <el-button @click="handleEdit(scope)" type="text" size="small">编辑</el-button>
        <el-button @click="handleSave(scope)" type="text" size="small">保存</el-button>
        <el-button @click="handleDelete(scope)" type="text" size="small">删除</el-button>

      </template>
    </el-table-column>
  </el-table>
</template>
<script src="../../Scripts/json2.js" type="text/javascript"></script>
<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      temp:''
    };
  },
  methods: {
    handleEdit(sco){
      sco.row.show = true;
      // var temp0=JSON.parse(JSON.stringify(row))
      this.temp=JSON.parse(JSON.stringify(sco.row));
      // this.$store.dispatch('temp', temp0);
      // console.log('1  this.temp',this.temp)
    },
    handleSave(sco) {
      console.log("scorow", sco.row);
      sco.row.show = false;
      const service = axios.create({
        baseURL: "http://172.22.217.134:8080", // api的base_url
        timeout: 5000, // request timeout
      });
      //使用这个实例发送请求,返回一个promise对象
      var requestOne = service.request({
        url: "/api/yonghuChange",
        method: "get",
        params: {
          row: sco.row,
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
          "Content-Type": "application/json",
          "Accept-Language": "zh-cn",
        },
      });
      //发送成功的回调
      requestOne.then((res) => {
        console.log(2);
        console.log("响应数据1：", res);
        console.log("响应数据2：", res.data);
        console.log("typeof响应数据2：", typeof res.data);
        if(res.data==true){
          console.log('修改成功')
              this.$message({message:'修改成功',type:'warning'})
        }else{
          console.log('修改失败')
          this.$message({message:'修改失败，可其他用户重复冲突',type:'warning'})
          // sco.row=this.temp
          // row=this.$store.getters.temp
          // console.log('Math.random()',Math.random())
          // console.log('2  this.temp',this.temp)
          // console.log(sco.$index)
          // console.log('this.tableData',this.tableData)
          // this.tableData[sco.$index]=''
          // console.log('this.tableData',this.tableData)
          // this.tableData[sco.$index]=this.temp
          // console.log('this.tableData',this.tableData)
          this.$set(this.tableData,sco.$index,this.temp)//用于解决table的数据改变而不更新，
          // 即当vue的data里面声明或者已经赋值过的对象或数组（包含对象值），向对象里面添加新的属性和更新这个新属性的值，
          // 页面视图是不会更新的，可以Vue.set( target, key, value ) / this.$set( target, key, value )
          // 有三种方法可以实现，分别是Vue.set, vm.$set, replace 
              // this.$router.push("/yonghu");
          
        }
      });
      requestOne.catch((err) => {
        console.log("请求错误", err);
      });
    },
//删除
    handleDelete(sco) {
      const service = axios.create({
        baseURL: "http://172.22.217.134:8080", // api的base_url
        timeout: 5000, // request timeout
      });
      //使用这个实例发送请求,返回一个promise对象
      var requestOne = service.request({
        url: "/api/yonghuDelete",
        method: "get",
        params: {
          row: sco.row,
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
          "Content-Type": "application/json",
          "Accept-Language": "zh-cn",
        },
      });
      //发送成功的回调
      requestOne.then((res) => {
       
        if(res.data==true){
          console.log('修改成功')
              this.$message({message:'删除成功',type:'success'})
              // this.$set(this.tableData,sco.$index,'')//用于解决table的数据改变而不更新，
              // delete this.tableData[sco.$index]
              // this.tableData(0,0,'')//用于解决table的数据改变而不更新，
              this.$delete(this.tableData,sco.$index) //用this.$delete删除时，可以更新页面
          console.log('this.tableData',this.tableData)
        }else{
          console.log('修改失败')
          this.$message({message:'删除失败',type:'warning'})
          // this.$set(this.tableData,sco.$index,this.temp)//用于解决table的数据改变而不更新，
        }
      });
      requestOne.catch((err) => {
        console.log("请求错误", err);
      });
    },
  },
  created() {
    const service = axios.create({
      baseURL: "http://172.22.217.134:8080", // api的base_url
      timeout: 5000, // request timeout
    });
    //使用这个实例发送请求,返回一个promise对象
    var requestOne = service.request({
      url: "/api/yonghu",
      method: "get",
      params: {
        // id // id:id
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
        "Content-Type": "application/json",
        "Accept-Language": "zh-cn",
      },
    });
    //发送成功的回调
    requestOne.then((res) => {
      console.log(2);
      console.log("响应数据1：", res);
      console.log("响应数据2：", res.data);
      console.log("typeof响应数据2：", typeof res.data);
      let list = res.data;
      list.forEach((element) => {
        element["show"] = false;
      });
      this.tableData = list;
      console.log("响应数据list：", list);
      console.log("typeof响应数据list：", typeof list);
    });
    requestOne.catch((err) => {
      console.log("请求错误", err);
    });
  },
};
</script>