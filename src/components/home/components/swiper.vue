<template>
	<swiper :options="swiperOption"> 
    <swiper-slide v-for='item of swiperList' :key='item.id' >
			<img class='img-swiper' :src='item.imgUrl' alt="">
    </swiper-slide> 
    <div class="swiper-pagination"  slot="pagination"></div> 
  </swiper>
</template>
<script>
export default{
	name:'HomeSwiper',
	props:{
		swiperList:Array
	},
	data:function(){
		return {
			swiperOption:{
				loop:true
			}
		}
	}
};
</script>
<style lang='stylus' scoped>
	.img-swiper
		width 100%
</style>