import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiUDiskLine: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-u-disk-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiUDiskLine
