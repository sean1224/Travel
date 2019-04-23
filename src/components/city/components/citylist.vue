<template>
	<div>
		<p class="title">
			热门城市
		</p>
		<div class="itemContainer">
			<div class="item" v-for='item in hotCities' :key='item.id'>
				{{item.name}}
			</div> 
		</div> 
		<p class="title">
			列表
		</p>
		<div class="listContainer" v-for='(value,key) in cities'>
			<p class="alpha border-bottom">{{key}}</p>
			<div v-for='item of value' class='border-bottom' :key='item.id'>
				{{item.name}}
			</div>
		</div> 
	</div>
</template>
<script>
export default{
	name:'CityList', 
	props:{
		hotCities:Array,
		cities:Object
	}
};
</script>
<style lang='stylus' scoped>
	.border-bottom
		border-bottom: solid 1px #eee;
	.title
		line-height: .5rem;
		background-color: #eee;
		padding: .2rem;
		width: 100%;
	.itemContainer
		text-align: center;
		padding-bottom: 2rem; 
		padding-left: .2rem;
		height: 0;
		overflow: hidden;
		.item
			float: left;
			width: 1.7rem;
			height: .6rem;
			border:solid 1px #eee;
			border-radius:.1rem;
			margin: .12rem .2rem .12rem 0;
			line-height: .5rem;
			font-size: .35rem;
	.listContainer
		width: 100%;
		.alpha
			padding-left: .3rem;
			height: .6rem;
			line-height: .6rem;
			font-size: .4rem;
		div
			height: .8rem;
			line-height: .8rem;
			padding-left: .2rem;
			font-size: .35rem;
			&:hover
				background-color: #eee;
	.border-bottom
		border-bottom: solid 1px #eee;
</style>