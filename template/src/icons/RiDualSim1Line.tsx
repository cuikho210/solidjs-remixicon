import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiDualSim1Line: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-dual-sim-1-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiDualSim1Line
