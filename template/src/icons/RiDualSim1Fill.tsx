import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiDualSim1Fill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-dual-sim-1-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiDualSim1Fill
