import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiMenuUnfold3Line: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-menu-unfold-3-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiMenuUnfold3Line
