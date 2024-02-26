import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiForward10Fill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-forward-10-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiForward10Fill
