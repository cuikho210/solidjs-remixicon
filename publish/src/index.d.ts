import { JSX, Component } from "solid-js"

export interface RiIconProps extends JSX.HTMLAttributes<HTMLElement> {
	// Alias for style['font-size']
	size?: string
}

export type RiIconComponent = Component<RiIconProps>
