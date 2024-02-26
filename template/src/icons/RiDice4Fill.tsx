import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiDice4Fill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-dice-4-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiDice4Fill
