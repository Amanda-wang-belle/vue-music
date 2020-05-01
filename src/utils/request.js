/* axios在vue-cli中的封装 */
import axios from 'axios'
import { Toast } from 'mint-ui'

// 创建axios实例
export const instance = axios.create({
	baseURL: process.env.VUE_APP_BASE_API,
	timeout: 20*1000
})

// request拦截器
instance.interceptors.request.use(config=>{
	return config
},err =>{
	return Promise.reject(err)
})

// response拦截器
instance.interceptors.response.use(res=>{
	const res = res.data
	return Promise.resolve(res)
	/* Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象。如果这个值是一个 promise ，那么将返回这个 promise ；如果这个值是thenable（即带有"then" 方法），返回的promise会“跟随”这个thenable的对象，采用它的最终状态；
	否则返回的promise将以此值完成。此函数将类promise对象的多层嵌套展平。 */
},err =>{
	Toast(err.message)
	return Promise.reject(err)
})

/* 
 request
 url:请求的url,如/data.json
 type:请求类型 get delete post put patch
 data:参数，get delete-->url，post,put,patch---> config
 isForm:是否表单数据  post 文件上传
 */
/* async和await一起用，防止进入回调地狱 */

export const request = async (url = '',type='GET',data={},isForm=false)=>{
	let result
	type = type.toUpperCase()
	let requestOptions = {
		method: type,
		url: url
	}
	if (isForm) {
		let form = new FormData()
		Object.keys(data).forEach(key =>{
			let value = data[key]
			if(Array.isArray(value)) {
				value.forEach(item =>{
					form.append(key,item)
				})
			}else {
				form.append(key,data[key])
			}
		})
	}
	requestOptions['headers'] = {
		'Content-type':isForm ? 'multipart/form-data':'application/json'
	}
	if(type === 'GET'){
		requestOptions['params'] = data
	}else {
		requestOptions['data'] = data
	}
	
	await instance(requestOptions).then(res =>{
		result = res
	})
	return result	
}