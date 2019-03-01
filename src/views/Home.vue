<template>
  <div>
    <fheader></fheader>
    <!-- <ffooter></ffooter> -->
  </div>
  
</template>

<script>
// @ is an alias to /src
import fheader from "@/components/Header";
import ffooter from "@/components/Footer";
export default {
  name: "home",
  components:{
    fheader,
    ffooter
  }
  
};
</script>
