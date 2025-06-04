import classnames from "classnames";
import { HiOutlineCloudUpload } from "react-icons/hi";

export default function Card({
	children,
	className,
	button,
	header,
	text,
	...rest
}) {
	let buttonClass = button === true ? `card-icon-button` : "";
	const allClasses = classnames("card", className);

	return (
		<section className={allClasses} {...rest}>
			<div className='card-icon-container'>
				<button className={`card-icon ${buttonClass}`}>
					<HiOutlineCloudUpload />
				</button>
			</div>
			{header && <p className='card-header'>{header}</p>}
			{text && <p className='card-text'>{text}</p>}
		</section>
	);
}
