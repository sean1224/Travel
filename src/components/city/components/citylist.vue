<template>
	<div>
		<p class="title">
			当前城市
		</p>
		<div class="itemContainer">
			<div class="item">
				上海市
			</div> 
		</div>
		<p class="title">
			热门城市
		</p>
		<div class="itemContainer">
			<div class="item">
				上海市
			</div> 
		</div> 
	</div>
</template>
<script>
export default{
	name:'CityList'
};
</script>
<style lang='stylus' scoped>
	.title
		line-height: .5rem;
		background-color: #eee;
		padding: .1rem;
		width: 100%;
	.itemContainer
		text-align: center;
		padding: .1rem;
		background-color: red;
		height: 0;
		padding-bottom: 1.6rem;
		overflow: hidden;
		.item
			float: left;
			width: 1.5rem;
			height: .5rem;
			border:solid 1px;
			border-radius:.1rem;
			margin: .12rem .2rem;
			line-height: .5rem;
</style>