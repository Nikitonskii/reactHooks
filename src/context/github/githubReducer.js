import { GET_REPOS, SEARCH_USERS, GET_USER, SET_LOADING, CLEAR_USERS } from '../types'

const handlers = {
	[SEARCH_USERS]: (state, { payLoad }) => ({ ...state, users: payLoad, loading: false }),
	[GET_REPOS]: (state, { payLoad }) => ({ ...state, repos: payLoad, loading: false }),
	[GET_USER]: (state, { payLoad }) => ({ ...state, user: payLoad, loading: false }),
	[SET_LOADING]: state => ({ ...state, loading: true }),
	[CLEAR_USERS]: state => ({ ...state, users: [] }),
	DEFAULT: state => state
}

export const githubReducer = (state, action) => {
	const handler = handlers[action.type] || handlers.DEFAULT
	return handler(state, action)
}