import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import type { JSX } from "solid-js"
import "remixicon/fonts/remixicon.css"

export const RiIconTemplate: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-class-name"
		if (props.class) return className + " " + props.class
		return className
	})

	const style = createMemo<string | JSX.CSSProperties>(() => {
		const fontSize = props.size || "24px"

		if (typeof props.style === "string" && props.style.trim().length > 0)
			return props.style

		let style = props.style || {}
		if (typeof style == "string") style = {}

		if (!style["font-size"]) {
			style["font-size"] = fontSize
		}

		return style
	})
	
	return <i
		{...props}
		class={className()}
		style={style()}
	/>
}

export default RiIconTemplate
