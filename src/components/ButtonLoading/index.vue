<template>
	<div class="loading-container">
		<sapn class="loading" v-if="loading === 'loading'">
			<mt-spinner type="triple-bounce" color="#6ed56c"></mt-spinner>
		</sapn>
		<span class="nothing" v-else-if="loading === 'nothing' ">没有更多了</span>
		<span class="error" v-else-if="loading ==='error' ">出错了</span>
	</div>
</template>

<script>
export default {
props:{
	loading: {
		type: [String, Boolean],
		default: '',
		required: true
	}
}
}
</script>

<style lang="stylus" scoped>
.loading-container {
	width: 100%;
	height : toRem(50);
	display : flex;
	align-items : center;
	justify-content : center;
	.loading, .nothing, .error {
		font-size : toRem(14);
		color : #999;
		text-align : center;
	}
	.error {
		color :$redColor;
	}
	
}
</style>
