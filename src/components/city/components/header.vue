<template>
	<div>
		<div class="title">
			<router-link to='/'>
				<span class="iconfont icon-back">&#58916;</span>
			</router-link>

			<p class='title-des'>城市选择</p>
		</div>
		<div class="search">
			<span class="iconfont icon-back">&#58930;</span>
			<input type="text" placeholder="搜索城市" /> 
		</div>
	</div>
</template>
<script>
export default{
	name:'CityHeader'
};
</script>
<style lang='stylus' scoped>
/*  @import '~styles/variables.styl'*/
.title
	position: relative;
	width: 100%;
	height: .86rem;
	background-color: #00bcd4;
	text-align: center;
	line-height .86rem		
	.icon-back
		position: absolute;
		left: .1rem;
		top: -.08rem;
		font-size: .4rem;
		color: #000;
	.title-des
		font-size:.36rem;
.search
	position: relative;
	background: #00bcd4;
	text-align: center;
	width: 100%;
	padding: 0 .3rem;
	box-sizing: border-box;
	span
		position: absolute;
		left: .38rem;
		top: .3rem;
		font-size: .35rem;
	input
		width: 100%;
		margin: .2rem auto;
		padding: 0 .5rem;
		box-sizing: border-box;
		font-size: .4rem;
		border: none;
		border-radius:.1rem;
		font-size: .35rem;
		color: #333;
</style>