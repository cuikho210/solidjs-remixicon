import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiProgress1Line: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-progress-1-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiProgress1Line
