<template>	
	<div class='container'>
		<home-header> </home-header>
		<home-swiper></home-swiper>		
		<home-icons></home-icons>
		<img-lists></img-lists>
	</div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons.vue'
import ImgLists from './components/ImgLists.vue'
export default {
	name:'homeheader',
	components:{HomeHeader,HomeSwiper,HomeIcons,ImgLists}
};
</script>

<style lang='stylus' scoped>
	.container
		padding-bottom: 20px;
</style>