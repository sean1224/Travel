<template>
	<div>
		<div class='img-title'>周末去哪儿</div>
		<div class="imglist" v-for='item of imglist' :key='item.id'>
			<img :src="item.imgUrl" alt="" class="img-src">
			<div class="img-des">
				<p class="des-name">{{item.title}}</p> 
				<p class="des-location">{{item.desc}}</p>
			</div>
		</div>		
	</div>
</template>
<script>
import index from '../../../../static/mock/index.json'
export default{
	name:'HomeWeekend',
	data(){
		return {
			imglist:index.data.weekendList
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
		height auto
		.img-src
			height 45%
			width 100%
		.img-des
			margin .1rem .2rem
			margin-bottom: .2rem;
			.des-name,.des-price,.des-location
				font-size: .24rem;
				line-height: .4rem;
</style>