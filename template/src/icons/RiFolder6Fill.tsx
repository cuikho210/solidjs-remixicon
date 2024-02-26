import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiFolder6Fill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-folder-6-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiFolder6Fill
