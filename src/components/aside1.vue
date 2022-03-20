<template>
    <div>
    <el-menu :default-openeds="['1']" router >
      
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>用户管理</template>
        <el-menu-item-group>
          <el-menu-item  :key="1" index="/yonghu">普通用户</el-menu-item>
          <el-menu-item  :key="2" index="/guanliyuan">管理员</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
     <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>图表</template>
        <el-menu-item-group>
          <el-menu-item  :key="1" index="/chart">tubiao</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  
</div>
</template>
<style>
  
</style>

<script>
  export default {
      name:'aside1',
   
  };
</script>