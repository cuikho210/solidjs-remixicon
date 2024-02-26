import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiCarouselView: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-carousel-view"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiCarouselView
