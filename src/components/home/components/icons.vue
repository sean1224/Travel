<template>
	  <swiper :options="swiperOption"> 
	    <swiper-slide v-for="(item,index) of pages" :key="index">
		  	<div class="icon-container">
					<div class="icon" v-for="item of pages[index]" :key='item.id'>
						<img :src="item.imgUrl" class='icon-img' alt="">
						<p class="icon-des">{{item.desc}}</p>
					</div> 	  		
		  	</div>
	    </swiper-slide> 
	    <div class="swiper-pagination"  slot="pagination"></div> 
  	</swiper> 
</template>
<script>
import index from '../../../../static/mock/index.json'
export default{
	name:'HomeIcons',
	data () {
		return {
			swiperOption:{},
			imgLists:index.data.iconList
		}
	},
	computed:{
		pages:function(){
			const _pages=[];  
			this.imgLists.forEach(function(element,index){
				const page=Math.floor(index/8)
				if(!_pages[page]){
					_pages[page]=[]
				} 
				_pages[page].push(element);
			}) 
			return _pages;
		}
	}
};
</script>
<style lang='stylus' scoped>
	.icon-container
		display flex
		flex-wrap wrap
		height 0
		width 100%
		overflow hidden
		padding-bottom 190px
		padding-top 20px
		.icon
			width 25%
			height 0
			overflow hidden
			text-align center
			padding-bottom 25%
			.icon-img
				width 60%
				height auto
				margin .1rem auto
			.icon-des
				line-height .3rem
				font-size .8em

</style>