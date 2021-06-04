<template>
  <div>
    <!-- 管理数据，实现双向绑定 -->
    <input :type="type" :value="value" @input="onInput"
      v-bind="$attrs"
    >
  </div>
</template>
<script>

  import emitter from '@/utils/mixins/emitter'
export default {
  inheritAttrs:false,
  mixins:[emitter],
  props:{
    value:{
      type:String,
      default:""
    },
    type:{
      type:String,
      default:'text'
    }
  },
  methods:{
    onInput(e){
      this.$emit('input',e.target.value)
      //this.$parent.$emit('validate')
      this.dispatch("KFormItem","validate")
    }
  }
}
</script>