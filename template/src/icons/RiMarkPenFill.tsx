import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiMarkPenFill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-mark-pen-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiMarkPenFill
