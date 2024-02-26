import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiMenuUnfold4Fill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-menu-unfold-4-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiMenuUnfold4Fill
