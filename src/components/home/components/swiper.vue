<template>
	<swiper :options="swiperOption"> 
    <swiper-slide v-for='item of imgList' :key='item.id' >
			<img class='img-swiper' :src='item.imgUrl' alt="">
    </swiper-slide> 
    <div class="swiper-pagination"  slot="pagination"></div> 
  </swiper>
</template>
<script>
import index from '../../../../static/mock/index.json'
export default{
	name:'HomeSwiper',
	data:function(){
		return {
			swiperOption:{
				loop:true
			},
			imgList:index.data.swiperList
		}
	}
};
</script>
<style lang='stylus' scoped>
	.img-swiper
		width 100%
</style>