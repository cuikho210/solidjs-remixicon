import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiChat1Fill2: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-chat-1-fill 2"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiChat1Fill2
