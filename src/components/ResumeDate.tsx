import classnames from "classnames";
import type { WrapperComponent } from "../types/WrapperComponent";

export const ResumeDate: WrapperComponent<"small"> = ({
	class: className,
	...properties
}) => <small class={classnames("float-right", className)} {...properties} />;
