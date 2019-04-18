<template>
	<div>
		<div class='img-title'>周末去哪儿</div>
		<div class="imglist" v-for='item of imglist'>
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
import index from '../../../../static/mock/index.json'
export default{
	name:'ImgList',
	data(){
		return {
			imglist:index.data.recommendList
		}
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