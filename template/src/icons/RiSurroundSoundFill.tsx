import { createMemo } from "solid-js"
import type { RiIconComponent } from "../index.d"
import "remixicon/fonts/remixicon.css"

export const RiSurroundSoundFill: RiIconComponent = (props) => {
	const className = createMemo(() => {
		const className = "ri-surround-sound-fill"
		if (props.class) return className + " " + props.class
		return className
	})
	
	return <i
		{...props}
		class={className()}
	/>
}

export default RiSurroundSoundFill
