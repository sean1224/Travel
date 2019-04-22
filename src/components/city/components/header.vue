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
.search
	background: #00bcd4;
	text-align: center;
	input
		width: 80%;
		padding: 0 .1rem;
		margin: .2rem auto;
		font-size: .4rem;
		border: none;
		border-radius:.1rem;
</style>