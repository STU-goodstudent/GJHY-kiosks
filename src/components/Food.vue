<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="body">
      <a href="#" class="choice">午餐</a>
      <a href="#" class="choice">晚餐</a>
      <div class="content">
        <p>信息</p>
      </div>
      <div class="map_p">
        <p>图片</p>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '就餐指引'
    }
  }
}
</script>

<style scoped>
  .body {
    float: left;
  }
  .choice {
    float: left;
    width: 100px;
    height: 40px;
    line-height: 40px;
    background-color: white;
    border: solid 1px black;
    text-decoration: none;
  }
  .content {
    margin-top: 40px;
    width: 400px;
    height: 300px;
    background-color: #ccc;
  }
  .map_p {
    width: 400px;
    height: 300px;
    background-color: #fcf;
  }
  
</style>