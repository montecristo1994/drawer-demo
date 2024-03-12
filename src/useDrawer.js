import { useCallback, useContext } from 'react'
import { DrawerDispatchContext } from './Drawer-prodiver'

const useDrawer = () => {
	const dispatch = useContext(DrawerDispatchContext)
	const openDrawer = useCallback(
		(title = '', content, footer) => {
			dispatch({ type: 'open', payload: { content, title, footer } })
		},
		[dispatch]
	)
	const closeDrawer = useCallback(() => {
		dispatch({ type: 'close' })
	}, [dispatch])
	return { openDrawer, closeDrawer }
}
export default useDrawer
