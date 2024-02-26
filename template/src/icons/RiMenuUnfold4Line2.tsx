import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiMenuUnfold4Line2: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-menu-unfold-4-line 2"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiMenuUnfold4Line2
