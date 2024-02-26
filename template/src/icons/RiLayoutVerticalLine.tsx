import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiLayoutVerticalLine: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-layout-vertical-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiLayoutVerticalLine
