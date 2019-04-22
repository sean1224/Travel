<template>
	<div>
		<city-header></city-header>
		<city-list></city-list>
		<city-alphabet></city-alphabet>
	</div>
</template>
<script>
import CityHeader from './components/header'
import CityList from './components/citylist'
import CityAlphabet from './components/alphabet'
export default{
	name:'city',
	components:{CityHeader,CityList,CityAlphabet}
};
</script>
<style lang='stylus' scoped>
	 
</style>