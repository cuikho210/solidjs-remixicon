import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiLogoutBoxRLine: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-logout-box-r-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiLogoutBoxRLine
