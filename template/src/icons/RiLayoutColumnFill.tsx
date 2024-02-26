import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiLayoutColumnFill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-layout-column-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiLayoutColumnFill
