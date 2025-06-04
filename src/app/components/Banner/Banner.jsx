import classnames from "classnames";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaExclamationTriangle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";

export default function Banner({ variant, title, text, ...rest }) {
	let variantClass = variant && `banner-${variant}`;
	const allClasses = classnames("banner", variantClass);

	return (
		<span className={allClasses} {...rest}>
			<div className='banner-icon'>
				{variant === "success" && <IoIosCheckmarkCircle style={{ color: "#34d399" }} />}
				{variant === "warning" && <FaExclamationTriangle style={{ color: "#FBBF24" }} />}
				{variant === "error" && <FaTimesCircle style={{ color: "#F87171" }} />}
				{variant === "neutral" && <FaInfoCircle style={{ color: "#60A5FA" }} />}
			</div>
			<div>
				<p className='banner-title'>{title}</p>
				{text && <p className='banner-text'>{text}</p>}
			</div>
		</span>
	);
}
