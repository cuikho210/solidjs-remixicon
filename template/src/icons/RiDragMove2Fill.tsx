import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiDragMove2Fill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-drag-move-2-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiDragMove2Fill
