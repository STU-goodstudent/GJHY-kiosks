<template>
  <div class="">
    <h1>{{ msg }}</h1>
    <div class="outbox">
      <a href="http://localhost:8080/#/Meeting" class="inbox title red">实时会议</a>
      <a href="http://localhost:8080/#/Search" class="inbox title orange">报告检索</a>
      <a href="http://localhost:8080/#/Food" class="inbox title blue">就餐指引</a>
      <a href="http://localhost:8080/#/Map" class="inbox title green">平面图</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎使用会议自助终端'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
.title {
  text-decoration: none;
  font: normal normal 44px SimSun;
}
.outbox{
  width: 100%;
  text-align: center;
  margin-left: -120px;

}
.inbox {
	display: inline-block;
	width: 400px;
	height: 280px;
  line-height: 260px;
	background-color: rgba(1, 1, 1, 0.05);
  margin-left: 250px;
	margin-bottom: 80px;
  margin-top: 30px;
}
/* color */
.red{
	border-top: 2px solid red;
}
.orange{
	border-top: 2px solid orange;
}
.blue{
	border-top: 2px solid blueviolet;
}
.green{
	border-top: 2px solid green;
}
.outbox a:hover {
	background-color: rgba(1, 1, 1, 0.1);
}
</style>
