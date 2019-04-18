<template>	
	<div class='container'>
		<home-header> </home-header>
		<home-swiper></home-swiper>		
		<home-icons></home-icons>
		<img-lists></img-lists>
		<home-weekend></home-weekend>
	</div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons.vue'
import ImgLists from './components/ImgLists.vue'
import HomeWeekend from './components/weekend.vue'
export default {
	name:'homeheader',
	components:{HomeHeader,HomeSwiper,HomeIcons,ImgLists,HomeWeekend}
};
</script>

<style lang='stylus' scoped>
	.container
		padding-bottom: 20px;
</style>