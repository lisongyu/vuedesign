<template>
  <div>
    <!-- 显示label -->
    <label v-if="label">{{label}}</label>
    <!-- 显示内部表单元素 -->
    <slot></slot>
    <!-- 错误提示信息 -->
    <p v-if="error" class="error">{{error}}</p>
    <!-- <p>{{form.model[prop]}}</p> -->
  </div>
</template>
<script>
  import Schema from 'async-validator'
  import emitter from '@/utils/mixins/emitter'
export default {
  name:'KFormItem',
  componentName:'KFormItem',
  mixins:[emitter],
  inject:['form'],
  props:{
    label:{
      type:String,
      default:''
    },
    prop:{
      type:String,
      default:''
    }
  },
  data(){
    return {
      error:''
    }
  },
  mounted(){
    this.$on('validate',()=>{
      this.validate()
    })
    if(this.prop){
    // 派发事件通知KForm,新增一个字段KFormItem实例
    this.dispatch('KForm','kkb.form.addField',[this])
    }
  },
  methods: {
    validate(){
      // 当前表单的校验
      console.log('do validate')
      // element 使用的是async-validator
      // 获取校验规则和当前数据
      const rules =this.form.rules[this.prop]
      const value =this.form.model[this.prop]
      const schema =new Schema({
        [this.prop]:rules
      })
      // 返回promise，全局可以统一处理
     return schema.validate({[this.prop]:value},errors=>{
        // errors存在，则校验失败
        if(errors){
          this.error=errors[0].message
        }else{
          this.error=''
        }
      })
    }
  },
}
</script>
<style lang="scss" scoped>
  .error{
    color:#f00;
  }
</style>