import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiDeviceRecoverFill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-device-recover-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiDeviceRecoverFill
