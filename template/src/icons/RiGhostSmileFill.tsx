import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiGhostSmileFill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-ghost-smile-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiGhostSmileFill
