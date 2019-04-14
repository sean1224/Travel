<template>
	  <swiper :options="swiperOption"> 
	    <swiper-slide v-for="(item,index) of pages" :key="index">
		  	<div class="icon-container">
					<div class="icon" v-for="item of pages[index]">
						<img :src="item.imgUrl" class='icon-img' alt="" :key='item.id'>
						<p class="icon-des">{{item.imgDes}}</p>
					</div> 	  		
		  	</div>
	    </swiper-slide> 
	    <div class="swiper-pagination"  slot="pagination"></div> 
  	</swiper> 
</template>
<script>
export default{
	name:'HomeIcons',
	data () {
		return {swiperOption:{},
			imgLists:[{
				id:'0001',
				imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
				imgDes:'景点门票'
			},{
				id:'0002',
				imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
				imgDes:'景点门票'
			},{
				id:'0003',
				imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
				imgDes:'景点门票'
			},{
				id:'0004',
				imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
				imgDes:'景点门票'
			},{
				id:'0005',
				imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
				imgDes:'景点门票'
			},{
				id:'0006',
				imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
				imgDes:'景点门票'
			},{
				id:'0007',
				imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
				imgDes:'景点门票'
			},{
				id:'0008',
				imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
				imgDes:'景点门票'
			},{
				id:'0009',
				imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
				imgDes:'景点门票'
			}]
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
				line-height .1rem
				font-size .27em

</style>