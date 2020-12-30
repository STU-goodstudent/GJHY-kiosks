<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="body">
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '平面图'
    }
  }
}
</script>

<style scoped>
  .body {
    width: 900px;
    height: 600px;
    margin: auto auto;
    background-color: rgb(105, 225, 255);

  }
</style>