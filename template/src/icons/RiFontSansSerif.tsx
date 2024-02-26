import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiFontSansSerif: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-font-sans-serif"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiFontSansSerif
