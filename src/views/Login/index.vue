<template>
  <div class="login">
    <div class="login-form">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
          <van-field v-model="age" type="age" name="年龄" label="年龄" placeholder="年龄" :rules="[{ required: true, message: '请填写年龄' }]" />
          <van-field name="radio" label="性别">
            <template #input>
              <van-radio-group v-model="checkedSex" direction="horizontal">
                <van-radio name="1">男</van-radio>
                <van-radio name="2">女</van-radio>
              </van-radio-group>
            </template>
          </van-field>
          <van-field name="radio2" label="平时健身习惯">
            <template #input>
              <van-radio-group v-model="checkedFitness" direction="horizontal">
                <van-radio name="1">从不</van-radio>
                <van-radio name="2">偶尔</van-radio>
                <van-radio name="3">经常</van-radio>
              </van-radio-group>
            </template>
          </van-field>
          <van-field name="checkboxGroup" label="健身方式（多选）">
            <template #input>
              <van-checkbox-group v-model="checkedMode" direction="horizontal">
                <van-checkbox name="1" shape="square">跑步</van-checkbox>
                <van-checkbox name="2" shape="square">游泳</van-checkbox>
              </van-checkbox-group>
            </template>
          </van-field>
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit"> 注册/登录 </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const username = ref('admin');
const password = ref('admin');
const age = ref(18);
const checkedSex = ref('1');
const checkedFitness = ref('2');
const checkedMode = ref(['1']);

function onSubmit() {
  router.push('/partition');
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url('@/images/bg1.png') no-repeat center/contain;
  background-size: 100% 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  &-form {
    margin-top: 220px;
    margin-left: 50px;
    ::v-deep(.van-cell) {
      background-color: unset;
      &::after {
        all: unset;
      }
      .van-cell__title {
        font-weight: bold;
        display: flex;
        align-items: center;
      }
    }
    ::v-deep(.van-cell-group) {
      background-color: rgba($color: #fed1db, $alpha: 0.4);
    }
  }
}
</style>
