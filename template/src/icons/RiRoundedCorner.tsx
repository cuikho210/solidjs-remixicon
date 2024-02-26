import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiRoundedCorner: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-rounded-corner"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiRoundedCorner
