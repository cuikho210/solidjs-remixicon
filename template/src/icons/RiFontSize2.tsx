import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiFontSize2: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-font-size-2"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiFontSize2
