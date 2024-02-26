import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiExchangeDollarFill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-exchange-dollar-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiExchangeDollarFill
