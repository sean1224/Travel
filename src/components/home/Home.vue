<template>	
	<div class='container'>
		<home-header> </home-header>
		<home-swiper :swiperList='swiperList'></home-swiper>		
		<home-icons :iconList='iconList'></home-icons>
		<img-lists :recommendList='recommendList'></img-lists>
		<home-weekend :weekendList='weekendList'></home-weekend>
	</div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import ImgLists from './components/ImgLists'
import HomeWeekend from './components/weekend'
import axios from 'axios'
export default {
	name:'homeheader',
	data () {
		return {
			swiperList:[],
			iconList:[],
			recommendList:[],
			weekendList:[]
		}
	},
	components:{HomeHeader,HomeSwiper,HomeIcons,ImgLists,HomeWeekend},
	methods:{
		getHomeInfo () {
			axios.get("/api/index.json").then(this.getHomeInfoSucc);
		},
		getHomeInfoSucc (res) {
			res=res.data;
			if(res.ret==true&&res.data){
				const data=res.data;
				this.swiperList=data.swiperList;
				this.iconList=data.iconList;
				this.recommendList=data.recommendList;
				this.weekendList=data.weekendList;				
			}

		}
	},
	mounted () {
		this.getHomeInfo();
	}
};
</script>

<style lang='stylus' scoped>
	.container
		padding-bottom: 20px;
</style>