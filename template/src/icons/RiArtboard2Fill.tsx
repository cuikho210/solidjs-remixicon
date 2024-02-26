import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiArtboard2Fill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-artboard-2-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiArtboard2Fill
