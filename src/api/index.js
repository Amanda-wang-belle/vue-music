import {request} from '@/utils/request'

export function getBanner() {
	let res = request('/banner','GET')
	return res
}

export function getList(page) {
	let res = request(`/list?page=${page}`,'GET')
}

export function getDetail(id) {
	let res = request(`/detail?id=${id}`,'GET')
	return res
}

export function getOther() {
	let res = request('/other','GET')
	return res
}