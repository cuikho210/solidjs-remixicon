import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiCalendarTodoLine: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-calendar-todo-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiCalendarTodoLine
