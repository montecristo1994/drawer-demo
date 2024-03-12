import React, { useReducer } from 'react'
const initialConfig = {
	isOpen: false,
	title: '',
	footer: '',
	content: null
}
const DrawerConfigContext = React.createContext(initialConfig)
const DrawerDispatchContext = React.createContext(null)
const DrawerProvider = ({ children }) => {
	const [config, dispatch] = useReducer(DrawerReducer, initialConfig)

	return (
		<DrawerConfigContext.Provider value={{ config }}>
			<DrawerDispatchContext.Provider value={dispatch}>
				{children}
			</DrawerDispatchContext.Provider>
		</DrawerConfigContext.Provider>
	)
}

function DrawerReducer(state, action) {
	const { type, payload } = action
	switch (type) {
		case 'open': {
			return {
				...state,
				isOpen: true,
				content: payload.content,
				title: payload.title,
				footer: payload.footer
			}
		}
		case 'close': {
			return {
				...state,
				isOpen: false
			}
		}
		default: {
			throw Error('Unknown action: ' + action.type)
		}
	}
}
export { DrawerConfigContext as DrawerContext, DrawerDispatchContext }
export default DrawerProvider
