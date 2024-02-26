import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiShoppingBag2Fill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-shopping-bag-2-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiShoppingBag2Fill
