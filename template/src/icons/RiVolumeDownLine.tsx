import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiVolumeDownLine: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-volume-down-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiVolumeDownLine
