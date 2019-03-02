<template>
  <div class="header">
      <Menu mode="horizontal" :theme="'light'" :active-name="activeKey">
        <div class="header-logo">
            <span>NoMoreForm</span>
        </div>
        <div class="header-nav">
          <MenuItem name="Home" :to="{name:'Home'}">
            <Icon type="ios-home"/>主页
          </MenuItem>
          <MenuItem name="CreateForm" :to="{name:'CreateForm'}">
            <Icon type="ios-bulb"/>创建表单
          </MenuItem>
         <MenuItem name="3" v-if="loginStatus!==true">
            <Button type="primary" ghost>登录</Button>
          </MenuItem> 
          <Submenu name="3"  v-else>
            <template slot="title">
              <Icon type="ios-person"/>Username
            </template>
            <MenuGroup title="表单">
              <MenuItem name="3-1">我的表单</MenuItem>
              <MenuItem name="3-2">个人中心</MenuItem>
            </MenuGroup>
          </Submenu>
          
        </div>
      </Menu>
  </div>
</template>
<script>
export default {
  name: "MyHeader",
  data() {
    return {
        loginStatus:false,
        activeKey: ""
    };
  },
  mounted(){
    // 导航菜单 active项 和路由名字对应
    this.activeKey = this.$route.name;
  }
};
</script>

<style scoped>
.header {
  position: relative;
  
}

.header-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
  line-height: 30px;
  text-align: center;
}

.header-logo > span{
  color: #ffffff;
  font-weight: bolder;
}

.header-nav{
    float: right;
    margin-left: 20px;
}
</style>

