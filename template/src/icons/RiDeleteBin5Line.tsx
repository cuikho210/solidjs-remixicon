import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiDeleteBin5Line: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-delete-bin-5-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiDeleteBin5Line
