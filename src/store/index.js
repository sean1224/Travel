import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

export default new vuex.Store({
  state:{
  	city:'蚌埠'
  },
  actions:{
  	changeCity (ctx,city){
  		ctx.commit("changeCity",city);
  	}
  },
  mutations:{
  	changeCity (state,city) {
  		state.city=city;
  	}
  }
})