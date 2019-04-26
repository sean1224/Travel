<template>
	<div>
		<div class="title">
			<router-link to='/'>
				<span class="iconfont icon-back">&#58916;</span>
			</router-link>

			<p class='title-des'>城市选择</p>
		</div>
		<div class="search">
			<span class="iconfont icon-back">&#58930;</span>
			<input v-model='inputText' type="text" placeholder="搜索城市" /> 
		</div>
		<div class="search-content" v-show='inputText'>
			<div class="listContainer">
				<div v-for='(item,index) of list' class='border-bottom' :key='item.id'>
					{{item.name}}
				</div>
			</div> 
		</div>
	</div>
</template>
<script>
export default{
	name:'CityHeader',
	props:{
		cities:Object
	},
	data () {
		return {
			inputText:'',
			list:[],
			timer:null
		}
	},
	watch: {
		inputText () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.inputText) {
        this.list = []
        return
      }
    	this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.inputText) > -1 || value.name.indexOf(this.inputText) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
		}
	}
};
</script>
<style lang='stylus' scoped>
/*  @import '~styles/variables.styl'*/
.title
	position: relative;
	width: 100%;
	height: .86rem;
	background-color: #00bcd4;
	text-align: center;
	line-height .86rem		
	.icon-back
		position: absolute;
		left: .1rem;
		top: -.08rem;
		font-size: .4rem;
		color: #000;
	.title-des
		font-size:.36rem;
.search
	position: relative;
	background: #00bcd4;
	text-align: center;
	width: 100%;
	padding: 0 .3rem;
	box-sizing: border-box;
	span
		position: absolute;
		left: .38rem;
		top: .3rem;
		font-size: .35rem;
	input
		width: 100%;
		margin: .2rem auto;
		padding: 0 .5rem;
		box-sizing: border-box;
		font-size: .4rem;
		border: none;
		border-radius:.1rem;
		font-size: .35rem;
		color: #333;
.search-content
	z-index: 1;
	position: fixed;
	top: 1.68rem;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #fff;
	overflow: scroll;
	.listContainer
		width: 100%;
		div
			height: .8rem;
			line-height: .8rem;
			padding-left: .2rem;
			font-size: .35rem;
			&:hover
				background-color: #eee;
.border-bottom
	border-bottom: solid 1px #eee;
</style>