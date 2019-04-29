<template>
	<div class='container' @click='slideClick'>
		<div class="wrapper">
		  <swiper :options='swiperOption'> 
		    <swiper-slide 
		    	v-for='(item,index) in imgs' 	
		    	:key='index'>
			  	<img class='gallary-img' :src="item">	  	 
		    </swiper-slide> 
		    <div class="swiper-pagination"  slot="pagination"></div> 
	  	</swiper> 			
		</div>
	</div>
</template>
<script>
export default{
	name:'CommonGallery',
	props:{
		imgs:Array
	},
	methods:{
		slideClick () {
			this.$emit('slideClick');
		}
	},
	data () {
		return {
			swiperOption:{
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
			}
		}
	}
};
</script>
<style lang='stylus' scoped>
  .container >>> .swiper-container
    overflow: inherit
	.container
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: #000;
		.wrapper
			height: 0;
			width: 100%;
			padding-bottom: 100%;
			.gallary-img
				width: 100%;
			.swiper-pagination
				color: #fff;
				bottom: -1rem;
</style>