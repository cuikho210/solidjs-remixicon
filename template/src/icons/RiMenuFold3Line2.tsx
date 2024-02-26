import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiMenuFold3Line2: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-menu-fold-3-line 2"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiMenuFold3Line2
