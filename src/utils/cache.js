// 缓存
/* localStorage 和 sessionStorage 属性允许在浏览器中存储 key/value 对的数据。

 #sessionStorage 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。
 window.sessionStorage
 sessionStorage.setItem("key", "value");
 var lastname = sessionStorage.getItem("key");
 sessionStorage.removeItem("key");
 sessionStorage.clear();
 
 #localStorage 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去删除。
 window.localStorage
 localStorage.setItem("key", "value");
 var lastname = localStorage.getItem("key");
 localStorage.removeItem("key");
 */
export default {
	getSession:function(key){
		if(!key) return
		return window.sessionStorage.getItem(key)
		
	},
	setSession:function(key,value){
		if(!key) return
		if(typeof value !== 'string'){
			value = JSON.stringify(value)
		}
		return window.sessionStorage.setItem(key,value)
	},
	removeSession:function(key){
		if(!key) return
		return window.sessionStorage.removeItem(key)
	},
	getLocal:function(key){
		if(!key) return
		return window.localStorage.getItem(key)
	},
	setLocal:function(key,value){
		if(!key) return
		return window.localStorage.setItem(key,value)
	},
	removeLocal:function(key){
		if(!key) return
		return window.localStorage.removeItem(key)
	}	
}