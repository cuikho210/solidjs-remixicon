import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiQrScan2Line: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-qr-scan-2-line"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiQrScan2Line
