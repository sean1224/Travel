<template>
	<div class="header">
		<div class='left'>
			<span class="iconfont icon-back">&#58916;</span>
		</div> 
		<div class="center">
			<span class="iconfont icon-search">&#xe632;</span>
			<input type="text" class='search' placeholder="输入地址" /> 
		</div>
		<div class="right"><span class="iconfont">&#58886;</span>三亚</div>		
	</div>	
</template>	

<script>
	export default {
		name:'HomeHeader'
	};
</script>

<style lang='stylus' scoped> 
.header
	display flex
	line-height .86rem
	background-color #00bcd4
	align-items middle
	.left
		width .64rem
		float left
		.icon-back
			margin-left 5px
	.right
		width 1.24rem
		float right
		text-align center
	.center
		flex 1
		height .64rem
		margin-top .12rem 
		background-color #fff
		border-radius .1rem
</style>