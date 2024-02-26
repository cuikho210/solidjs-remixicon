import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiBatteryLowFill2: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-battery-low-fill 2"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiBatteryLowFill2
