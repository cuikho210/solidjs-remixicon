import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiBuilding2Fill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-building-2-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiBuilding2Fill
