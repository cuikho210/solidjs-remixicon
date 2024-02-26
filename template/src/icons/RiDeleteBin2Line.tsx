import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiDeleteBin2Line: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-delete-bin-2-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiDeleteBin2Line
