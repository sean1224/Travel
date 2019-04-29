<template>
	<div class='container'>
		<div class="back">
			<span class="iconfont icon-back" @click='backClick'>&#58916;</span>
		</div>
		<div class='banner' @click='bannerClick'>
			<img src="http://img1.qunarzz.com/sight/p0/1904/61/61e27e8a5002fe5ca3.img.jpg_r_800x800_210b98cb.jpg" alt="">
			<div class="banner-info">
				<div class="info-title">迪士尼海港乐园</div>
				<div class="info-img">
					<div>69</div>
				</div>
			</div>
		</div>	
		<common-gallery :imgs='imgs' v-if='ShowGallery' @slideClick='slideClick'></common-gallery>	
	</div>

</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
	name:'DetailBanner',
	data () {
		return {
			imgs:['http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_r_800x800_d6a63068.jpg','http://img1.qunarzz.com/sight/p0/1811/d5/d5153b5e337c0644a3.water.jpg_r_800x800_5785f05e.jpg','http://img1.qunarzz.com/sight/p0/1811/ff/ff0ba07998df4d1a3.water.jpg_r_800x800_b508383f.jpg'],
			ShowGallery:false
		}
	},
	methods:{
		bannerClick () {
			this.ShowGallery=true;
		},
		slideClick () {
			this.ShowGallery=false;
		},
		backClick () {
			this.$router.push('/');
		}
	},
	components:{
		CommonGallery
	}
};	
</script>

<style lang='stylus' scoped>
.container
	position: relative;
	.back
		width: .4rem;
		height: .4rem;
		position: absolute;
		left:.1rem;
		top: .2rem;
		z-index: 10;
	.banner
		position: relative;
		height: 0;
		overflow: hidden;
		padding-bottom: 55%;
		img
			width: 100%;
		.banner-info
			position: absolute;	
			left: 0;
			right: 0;	
			bottom: .1rem;	
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			color: #fff;
			box-sizing: border-box;
			text-align: center;	
			.info-title
					font-size: .28rem;
					min-width: 2.2rem;	
			.info-img
					font-size: .25rem;
					min-width: .6rem;
</style>