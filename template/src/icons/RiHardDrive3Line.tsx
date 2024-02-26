import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiHardDrive3Line: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-hard-drive-3-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiHardDrive3Line
