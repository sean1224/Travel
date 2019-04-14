<template>
	<swiper :options="swiperOption"> 
    <swiper-slide v-for='item of imgList' :key='item.id' >
			<img class='img-swiper' :src='item.url' alt="">
    </swiper-slide> 
    <div class="swiper-pagination"  slot="pagination"></div> 
  </swiper>
</template>
<script>
	export default{
		name:'HomeSwiper',
		data:function(){
			return {
				swiperOption:{
					loop:true
				},
				imgList:[
					{id:'0001',url:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'},
					{id:'0002',url:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/4804077ab49a1396c3dfd08888f0f879.jpg_750x200_cb1a6f73.jpg'},
					{id:'0003',url:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/0784bc37611775e67f14ba42d6f0b008.jpg_750x200_23490945.jpg'}
				]
			}
		}
	};
</script>
<style lang='stylus' scoped>
	.img-swiper
		width 100%
</style>