import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiLockUnlockFill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-lock-unlock-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiLockUnlockFill
