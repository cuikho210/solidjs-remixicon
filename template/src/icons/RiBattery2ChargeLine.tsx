import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiBattery2ChargeLine: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-battery-2-charge-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiBattery2ChargeLine
