import classnames from "classnames";

export default function Badge({
	children,
	className,
	color,
	size,
	variant,
	...rest
}) {
	let variantClass = variant && `badge-${variant}`;
	let sizeClass = size && `badge-${size}`;
	let colorClass = variant && `badge-${color}`;
	const allClasses = classnames(
		"badge",
		sizeClass,
		variantClass,
		colorClass,
		className
	);

	return (
		<span className={allClasses} {...rest}>
			{children}
		</span>
	);
}
