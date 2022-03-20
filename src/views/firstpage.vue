<template>
  <div id="div">
    <el-container class="div1">
        <el-header>Header</el-header>
        <el-container class="div2">
            <el-aside width="200px">
               <Aside1></Aside1>
            </el-aside>
            <el-main><router-view/></el-main>
        </el-container>
    </el-container>
  
    
  </div>
</template>

<script>

import Aside1 from '@/components/aside1.vue'
 
export default {
  name: 'firstpage',
  components: {
    Aside1
  }
}
</script>

<style lang="scss">
  #div {
    // margin: -8px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 770px;
    color: #2c3e50;
  background-color: #67a3e9;
  }
  .div1{
    height: 100%;
  }
  .div2{
    height: 85%;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    height: 15%;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: 100%;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 100%;
  }
  
</style>
