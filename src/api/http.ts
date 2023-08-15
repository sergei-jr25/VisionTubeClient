import axios from 'axios'
import { getContentType } from './api.helper'

export const API_URL = `${process.env.APP_URL}/api`
export const API_UPLOAD_IMG = `${process.env.APP_URL}/uploads`

export const http = axios.create({
	baseURL: process.env.APP_URL,
	headers: getContentType()
})

// http.interceptors.request.use(config => {
// 	const accessToken = Cookies.get('accessToken')

// 	if (config.headers && accessToken) {
// 		config.headers.Authorization = `Bearer ${accessToken}`
// 	}

// 	return config
// })

// http.interceptors.response.use(
// 	config => config,
// 	async error => {
// 		const originalRequest = error.config

// 		if (
// 			(error.response.status === 401 ||
// 				errorCath(error) === 'jwt expired' ||
// 				errorCath(error) === 'jwt must be provider') &&
// 			error.config &&
// 			!error.config._isRetry
// 		) {
// 			originalRequest._isRetry = true

// 			try {
// 				return http.request(originalRequest)
// 			} catch (error) {
// 				if (errorCath(error) === 'jwt expired') removeCookie()
// 			}
// 		}

// 		throw error
// 	}
// )
