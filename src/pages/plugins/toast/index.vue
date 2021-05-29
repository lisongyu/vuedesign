<template>
  <div>
    <div class="" @click="handleToast">点击我出toast</div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      
    }
    
  },
  methods:{
    handleToast(){
      console.log('我要出toast')
      this.$toast.show('toast 加载成功' , 2000)
    }

  }
}
</script>