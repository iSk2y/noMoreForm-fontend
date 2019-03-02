<template>
  <div>
    <my-header></my-header>
    <router-view></router-view>
    <!-- <ffooter></ffooter> -->
  </div>
  
</template>

<script>
// @ is an alias to /src
import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/MyFooter";
export default {
  name: "home",
  components:{
    MyHeader,
    MyFooter
  }
  
};
</script>
