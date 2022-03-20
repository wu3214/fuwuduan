<template>
  <el-table :data="tableData" stripe style="width: 100%">
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
  </el-table>
</template>
<script src="../../Scripts/json2.js" type="text/javascript"></script>
<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      
    };
  },
  methods: {
     handleEdit(index, row,column,store) {
        // console.log('index',index);
        console.log('row',row);
        // console.log('column',column);
        // console.log('store',store);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
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
    requestOne.then(res => {
      console.log(2);
      console.log("响应数据1：", res);
      console.log("响应数据2：", res.data);
      console.log("typeof响应数据2：",typeof res.data);
      this.tableData=res.data;
      // console.log("响应数据3：", this.tableData1);
      // console.log("typeof响应数据3：",typeof this.tableData1);
      // var str = JSON.stringify(res.data);
      // var str1 = JSON.parse(str);
      // console.log("typeof响应数据4：", str);
      // console.log("typeof响应数据4：",typeof str);

      // console.log("typeof响应数据5：", str1);
      // console.log("typeof响应数据5：",typeof str1);
      // console.log("typeof响应数据5：",typeof str1);
      // console.log(typeof [{
      //     date: '2016-05-02',
      //     name: '王小虎',
      //     address: '上海市普陀区金沙江路 1518 弄',
      //   }, {
      //     date: '2016-05-04',
      //     name: '王小虎',
      //     address: '上海市普陀区金沙江路 1518 弄'
      //   }]);

      
      // console.log("响应数据1：" , JSON.parse(res));

      
      // console.log(res.data.url)
    });
    requestOne.catch((err) => {
      console.log("请求错误", err);
    });

    // axios({
    //   url: 'https://autumnfish.cn/banner',
    //   method: 'get'
    // }).then(res => {
    //   console.log(res)
    //   // this.banners = res.data.banners
    // })
    // axios
    // .get('/api/user')
    // .then(function(response)  {
    //   // this.tableData = response,
    //   console.log('请求成功处理',response)
    // })
    // .catch(function (error) { // 请求失败处理
    //   console.log('请求失败处理',error);
    // });
  },
};
</script>