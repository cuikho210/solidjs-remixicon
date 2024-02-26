import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiUser5Fill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-user-5-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiUser5Fill
