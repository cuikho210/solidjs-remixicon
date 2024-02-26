import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiShoppingCart2Line: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-shopping-cart-2-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiShoppingCart2Line
