// 播放模式配置文件
const Options = {
	default: {
		label:'默认',
		value:'default',
		icon:'my-icon-more'
	},
	random:{
		label:'随机播放',
		value:'random',
		icon:'my-icon-randow'
	},
    singleRepeat: {
        label: '单曲循环',
        value: 'singleRepeat',
        icon: 'my-icon-repeatone'
    },
    listRepeat: {
        label: '列表循环',
        value: 'listRepeat',
        icon: 'my-icon-repeat'
    }
}

export let ArrayOptions = []
Object.keys(options).forEach(key=>{
	ArrayOptions.push(Options[key])
})

/* 1、Array.find()：
作用：用于找出第一个符合条件的数组成员。
它的参数是一个回调函数，所有数组成员依次执行该回调函数，
直到找出第一个返回值为true的成员，然后返回该成员。
如果没有符合条件的成员，则返回undefined。 */

export function findActiveMode(value){
	const activeOption = ArrayOptions.find(item =>{
		item.value = value
	})
}

export default Options