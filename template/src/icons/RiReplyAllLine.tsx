import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiReplyAllLine: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-reply-all-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiReplyAllLine
