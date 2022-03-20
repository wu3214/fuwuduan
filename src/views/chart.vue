<template>
    <div>
        <ve-line :data="lineData" :extend="lineExtend" ref="line">每天新注冊人數</ve-line>
         <!-- <ve-line :data="chartData" :extend="chartExtend" ref="chartline"></ve-line> -->
     </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'VueElementAdminMasterChart',

    data() {
        return {
            lineData:{
                columns:['registrationDate','countid'],
                rows:[]
            }
        };
    },
    created() {
        const service = axios.create({
      baseURL: "http://172.22.217.134:8080", // api的base_url
      timeout: 5000, // request timeout
    });
    //使用这个实例发送请求,返回一个promise对象
    var requestOne = service.request({
      url: "/api/chartyonghu",
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
      this.lineData.rows=res.data;
      console.log(this.lineData.rows)
      console.log(typeof this.lineData.rows)
    
    });
    requestOne.catch((err) => {
      console.log("请求错误", err);
    });
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>