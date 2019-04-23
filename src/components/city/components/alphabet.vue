<template>
	<div class='alphaContainer'> 
		<div class='item1' 
			@click='change' 
			v-for='(value,key) of cities' 
			:key='key'>{{key}}
		</div>
	</div>
</template>
<script>
export default{
	name:'alphabet',
	props:{
		cities:Object
	},
	methods:{
		change (e) {
			this.$emit("change",e.target.innerText);
		}
	}
};
</script>
<style lang='stylus' scoped>
	.alphaContainer
		display: flex;
		position: fixed;
		text-align: center;
		flex-direction: column;
		width: .7rem;
		height: 500px;
		right: 0;
		top: 150px;
		.item1
			font-size: .33rem;
			line-height: .4rem;
			color: #bbb;
</style>