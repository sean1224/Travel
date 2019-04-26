<template>
	<div class='alphaContainer'> 
		<div class='item1' 
			@click='change' 
			v-for='item of letters' 
			:key='item'
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd">
      {{item}}

		</div>
	</div>
</template>
<script>
export default{
	name:'alphabet',
	props:{
		cities:Object
	},
  data () {
	  return {
	    touchStatus: false,
	    startY: 0,
	    timer: null
	  }
  },
  computed: {
	  letters () {
	    const letters = []
	    for (let i in this.cities) {
	      letters.push(i)
	    }
	    return letters
	  }
  },
	methods:{
		change (e) {
			this.$emit("change",e.target.innerText);
		},
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 150
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false;
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