import { toastr } from 'react-redux-toastr'

export const getContentType = () => ({
	'Content-Type': 'application/json'
})

export const errorCath = (error: any) =>
	error.response && error.response.data
		? typeof error.response.data.message === 'object'
			? error.response.data.message[0]
			: error.response.data.message
		: error.message

export const toastError = (error: any, title = 'Error request') => {
	const message = errorCath(error)
	toastr.error(title, message)
	throw message
}
