import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiQuillPenFill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-quill-pen-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiQuillPenFill
