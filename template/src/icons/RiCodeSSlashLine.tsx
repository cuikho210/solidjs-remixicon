import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiCodeSSlashLine: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-code-s-slash-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiCodeSSlashLine
