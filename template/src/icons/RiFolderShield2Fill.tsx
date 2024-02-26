import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiFolderShield2Fill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-folder-shield-2-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiFolderShield2Fill
