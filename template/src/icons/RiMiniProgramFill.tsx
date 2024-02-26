import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiMiniProgramFill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-mini-program-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiMiniProgramFill
