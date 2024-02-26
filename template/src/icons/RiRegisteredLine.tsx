import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiRegisteredLine: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-registered-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiRegisteredLine
