import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiFile2Line2: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-file-2-line 2"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiFile2Line2
