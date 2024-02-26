import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiMailCloseFill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-mail-close-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiMailCloseFill
