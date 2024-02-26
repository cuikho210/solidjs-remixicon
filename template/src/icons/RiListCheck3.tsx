import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiListCheck3: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-list-check-3"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiListCheck3
