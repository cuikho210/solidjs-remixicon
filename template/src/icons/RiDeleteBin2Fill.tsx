import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiDeleteBin2Fill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-delete-bin-2-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiDeleteBin2Fill
