import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiMapPinUserLine: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-map-pin-user-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiMapPinUserLine
