import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiForward30Fill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-forward-30-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiForward30Fill
