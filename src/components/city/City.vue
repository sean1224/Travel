<template>
	<div>
		<city-header :cities='cities'></city-header>
		<city-list :hotCities='hotCities' :cities='cities' :letter='letter'></city-list>
		<city-alphabet :cities='cities' @change='itemClick'></city-alphabet>
	</div>
</template>
<script>
import CityHeader from './components/header'
import CityList from './components/citylist'
import CityAlphabet from './components/alphabet'
import axios from 'axios'
export default{
	name:'city',
	components:{CityHeader,CityList,CityAlphabet},
	data(){
		return {
			cities:{},
			hotCities:[],
			letter:''
		}
	},
	methods:{
		getCityInfo () {
			axios.get("/api/city.json").then(this.getCityInfoSucc);
		},
		getCityInfoSucc (res) {
			let data=res.data;
			if(data.ret&&data.data){
				let _data=data.data; 
				this.cities=_data.cities;
				this.hotCities=_data.hotCities;
			}
		},
		itemClick (res) {
			this.letter=res;
		}
	},
	mounted () {
		this.getCityInfo();
	}
};
</script>
<style lang='stylus' scoped>
	 
</style>