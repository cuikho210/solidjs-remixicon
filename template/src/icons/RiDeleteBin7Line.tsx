import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiDeleteBin7Line: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-delete-bin-7-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiDeleteBin7Line
