<template>
	<div>
		<div class='img-title'>今日推荐</div>
		<div class="imglist" v-for='item of recommendList'>
			<img :src="item.imgUrl" alt="" class="img-src" :key='item.id'>
			<div class="img-des">
				<p class="des-name">{{item.title}}</p>
				<p class="des-price">$100</p>
				<p class="des-location">{{item.desc}}</p>
			</div>
		</div>		
	</div>
</template>
<script>
export default{
	name:'ImgList',
	props:{
		recommendList:Array
	}
};
</script>
<style lang='stylus' scoped>
	.img-title
		line-height .2rem
		padding .2rem .4rem
	.imglist
		display flex
		flex-wrap wrap
		height 100px
		width 100%
		padding .2rem 0
		margin-left: .4rem;
		.img-src
			height 100px
			width 100px
		.img-des
			margin-left: .2rem;
			.des-name,.des-price,.des-location
				margin-top: .22rem;
				font-size: .24rem;
				line-height: .4rem;
</style>