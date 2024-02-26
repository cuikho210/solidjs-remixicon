import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const Ri24HoursLine: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-24-hours-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default Ri24HoursLine
