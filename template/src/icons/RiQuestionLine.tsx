import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiQuestionLine: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-question-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiQuestionLine
