import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiSuitcase3Fill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-suitcase-3-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiSuitcase3Fill
