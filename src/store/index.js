import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import cache from '@/utils/cache'
import playMode from '@/utils/playMode'
import router from '@/router'

Vue.use(Vuex)

const vuexLocal = new VuexPersist({
	storage:window.sessionStorage
})


// 数据仓库
const state = {
	audio:{
		ele: null, //audio元素
		data: null, //audio 音乐数据
		play: false, //audio播放状态
		duration: 0, //audio总时长
		currentTime:0 //audio当前秒数
	},
	playMode: playMode.default.vaule, //播放模式
	playList: []  //播放列表
}

// 计算属性，数据过滤
const getters = {
	// audio当前百分比的播放进度
	audio_process: state=>{
		return (state.audio.currentTime/state.audio.duration *100).toFixed(2) + '%'
	}
}

// 更改state
const mutations = {
	SET_AUDIO_ELE(state, val){
		state.audio.ele = val
		// 判断是否添加到播放列表
		const isHas = state.playList.find(n=>{
			n.sound.id = val.sound.id
		})
		
		if(!isHas){
			state.playList.unshift(val)
		}
		
		if(router.history.current.name === 'detail'){
			router.replace({name: 'detail', query: { 'id': val.sound.id}})
		}
	},
	SET_AUDIO_PLAY(state, val) {
		state.audio.play = val
	},
	SET_AUDIO_DURATION(state,val) {
		state.audio.duration = val
	},
	SET_AUDIO_CURRENT_TIME(state,val){
		state.audio.currentTime = val
	},
	SET_PLAY_MODE(state,val) {
		state.playMode = val
		cache.setSession('playMode',val)
	},
	SET_PLAY_LIST(state,val){
		state.playList = val.slice()
		cache.setSession('playList',val)
	}
}

// 异步操作
const actions = {
	// 获取应用缓存，如：播放列表playList ,播放模式playMode
	INIT_APP_CACHE({commit}) {
		let playMode = cache.getSession('playMode')
		let playList = JSON.parse(cache.getSession('playList'))
		if(playMode){
			commit('SET_PLAY_MODE',palyMode)
		}
		if(playList && playList.length>0){
			commit('SET_PLAY_LIST',playList)
		}
	}
}

export default new Vuex.Store({
	plugins:[vuexLocal.plugins]
	state,
	getters,
	mutations,
	ations
})