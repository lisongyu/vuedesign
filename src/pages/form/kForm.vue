<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
// 1.props:model,rules
// 2.validate()
  export default {
    name:'KForm',
  componentName:'KForm',
    provide(){
      return {
        form:this // 这里传递的是表单组件实例
      }
    },
    props: {
      model: {
        type: Object,
        require:true
      },
      rules:Object
    },
    created(){
      this.fields=[]
     
        this.$on('kkb.form.addField',item=>{
        this.fields.push(item)
      })
      
     

    },
    methods:{
      validate(cb){
        // 全局校验方法
        // 1.执行内部所有的FormItem校验方法，统一处理结果
        // 将FromItem数组转换为Promise数组
        const tasks=this.fields
       
        .map(item=>item.validate())
        // 2.统一检查校验结果
        Promise.all(tasks)
        .then(()=>cb(true))
        .catch(()=>cb(false))
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>