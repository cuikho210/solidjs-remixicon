import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiBuilding4Fill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-building-4-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiBuilding4Fill
