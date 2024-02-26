import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiStickyNote2Fill2: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-sticky-note-2-fill 2"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiStickyNote2Fill2
