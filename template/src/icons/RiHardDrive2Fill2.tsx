import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiHardDrive2Fill2: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-hard-drive-2-fill 2"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiHardDrive2Fill2
