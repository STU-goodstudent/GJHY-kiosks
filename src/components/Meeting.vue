<template>
  <div>
    <h1>{{ msg }}</h1>
    <table width="950px" height="200px" cellspacing="0" cellpadding="18" align="center" >
		<tr class="headline">
			<th>时间</th>
			<th>报告主题</th>
			<th>报告厅位置</th>
      <th>状态</th>
			<th>位置指引</th>
      <th>详情</th>	
		</tr>
		<tr>
			<td>13:20-14:55</td>
			<td><a href="#">报告主题1</a></td>
			<td>41楼03室</td>	
			<td>进行中</td>
			<td><a href="#">icon</a></td>
			<td><a href="#">icon</a></td>		
		</tr>
		<tr>
			<td>15:20-16:55</td>
			<td><a href="#">报告主题2</a></td>
			<td>33楼01室</td>	
			<td>进行中</td>
			<td><a href="#">icon</a></td>
			<td><a href="#">icon</a></td>		
		</tr>
		<tr>
			<td>17:20-18:55</td>
			<td><a href="#">报告主题3</a></td>
			<td>09楼21室</td>	
			<td>进行中</td>
			<td><a href="#">icon</a></td>
			<td><a href="#">icon</a></td>		
		</tr>
	</table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '实时报告'
    }
  }
}
</script>

<style scoped>
table,td,th{
	border: 1px solid red;
	/* 合并边框 */
	border-collapse: collapse;
	font-size: 20px;
}
.headline{
	background-color: rgb(0, 195, 255);
	color: white;
}
</style>