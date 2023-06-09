<template>
  <div class="not-found">
    <h1>404</h1>
    <p>抱歉，你访问的页面走丢了</p>
    <router-link to="/"> <n-button type="primary"> 返回首页 </n-button></router-link>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  margin: 0 auto;
  padding-top: 12vh;
  width: 500px;
  height: 88vh;
  min-height: 500px;
  h1 {
    font-size: 200px;
    font-weight: 900;
  }
  p {
    margin-bottom: 20px;
    font-size: 40px;
  }
}
</style>
