import Vue from 'vue'
import Vuex from 'vuex'
import router from "../router/index"
import $ from 'jquery'
Vue.use(Vuex)

const state = {
  isCollapse: false,
  isShowAside: false,
  currentStep: 0,
  isLogin: false
}

const mutations = {
  changeCollapse (state) {
    state.isCollapse = !state.isCollapse;
  },
  changeAside (state) {
    state.isShowAside = !state.isShowAside;
  },
  increaseCurrentStep (state) {
    state.currentStep += 1;
    router.replace({name: 'sponsor', params: {step: 'step' + (state.currentStep + 1)}})
  },
  decreaseCurrentStep (state) {
    state.currentStep -= 1;
    router.replace({name: 'sponsor', params: {step: 'step' + (state.currentStep + 1)}})
  },
  changeLogin (state) {
    state.isLogin = !state.isLogin;
    if(state.isLogin) {
      router.replace({name: 'histogram'})
    } else{
      router.replace({name: 'login'})
    }
  }
}

export default new Vuex.Store({
  state,
  mutations
})
