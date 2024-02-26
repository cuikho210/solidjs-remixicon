import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiMergeCellsHorizontal: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-merge-cells-horizontal"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiMergeCellsHorizontal
