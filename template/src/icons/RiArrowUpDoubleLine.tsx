import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiArrowUpDoubleLine: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-arrow-up-double-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiArrowUpDoubleLine
