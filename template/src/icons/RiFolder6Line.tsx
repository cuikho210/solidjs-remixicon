import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiFolder6Line: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-folder-6-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiFolder6Line
