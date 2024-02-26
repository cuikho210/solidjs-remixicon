import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiMenuFold4Line: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-menu-fold-4-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiMenuFold4Line
