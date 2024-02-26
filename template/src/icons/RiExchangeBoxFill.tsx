import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiExchangeBoxFill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-exchange-box-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiExchangeBoxFill
