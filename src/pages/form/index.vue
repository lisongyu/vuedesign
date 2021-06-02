<template>
  <div>
    <KForm :model="model">
      <KFormItem label="用户名">
          <KInput v-model="model.username" placeholder="请输入用户名"></KInput>
      </KFormItem>
        <KFormItem label="密码">
          <KInput v-model="model.password" placeholder="请输入密码"></KInput>
      </KFormItem>
    </KForm>

  </div>
</template>

<script>

import KInput from './Kinput'
import KForm from './kForm'
import KFormItem from './KFormItem'
export default {
  components:{
    KInput,
    KFormItem,
    KForm
  },
  data(){
    return {
      model:{
        username:'tom',
        password:'12333'
      }
    }
  }
  
}
</script>