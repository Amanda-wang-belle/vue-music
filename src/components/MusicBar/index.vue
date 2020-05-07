<template>
	<div id="musicBarContainer">
		<div id="musicBar" v-if="audio_data">
			<div class="music">
				<!-- audio -->
				<audio id="audio" autoplay="autoplay" :src="audio_data.sound.source"></audio>
				<!-- 封面 -->
				<router-link class="music-cover" :to="{path:'detail',query:{id:audio_data.sound.id}}">
					<img :src="audio_data.sound.pic_500" />
				</router-link>
				<!-- 信息 -->
				<div class="music-info">
					<div class="info-name">{{audio_data.sound.name}}</div>
					<div class="info-author">{{audio_data.sound.user.name}}</div>
				</div>
				<!-- 按钮 -->
				<div class="music-control">
					<!-- 播放列表 -->
					<div class="my-icon-menu control-icon" @click="$refs.popup.toggleVisible()"></div>
					<!-- 播放/暂停 -->
					<div class="control-icon control-icon-mid" :class="audio_play?'my-icon-pause':'my-icon-arrow'" @click="SET_AUDIO_PLAY(!audio_play)"></div>
					<!-- 下一首 -->
					<div class="my-icon-next control-icon" @click="handleNextAudio"></div>
				</div>
			</div>
			<div class="progress_bar">
				<div class="progress_bar_inner" :style="`width:${audio_progress}`"></div>
			</div>
		</div>
		<!-- 播放列表 & 播放模式 -->
		<app-popup ref="popup" v-if="audio_data"></app-popup>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import appPopup from '@/components/Popup'
export default {
	comments:{ appPopup},
	data() {
		return {
			popupVisible: false
		}
	},
	computed: {
		...mapState({
			audio_ele: state => state.audio.ele,
			audio_data: state => state.audio.data,
			audio_play: state => state.audio.play,
			playList: state => state.playList,
			playMode: state => state.playMode
		}),
		...mapGetters([
			'audio_progress'
		]),
		watch:{
			audio_data(val) {
				// 当前audio数据改变了，等dom更新完，初始化audio
				if(val) {
					this.$nextTick(()=>{
						this.audioInit()
					})
				}
			},
			audio_play(val) {
				val ? this.audio_ele.paly():this.audio_ele.pause()
			}
		},
		methods: {
			...mapMutations([
			    'SET_AUDIO_ELE',
			    'SET_AUDIO_DATA',
			    'SET_AUDIO_PLAY',
			    'SET_AUDIO_DURATION',
			    'SET_AUDIO_CURREN_TIME',
			    'SET_PLAY_MODE',
			    'SET_PLAY_LIST'
			]),
			// audio元素初始化
			audioInit() {
				
			}
		}
	}
}
</script>

<style>
</style>
