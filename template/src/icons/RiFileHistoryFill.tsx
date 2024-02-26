import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiFileHistoryFill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-file-history-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiFileHistoryFill
