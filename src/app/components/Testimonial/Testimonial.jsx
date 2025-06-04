import classnames from "classnames";
import { ImQuotesLeft } from "react-icons/im";

function Testimonial({ children, className, img, logo, text, name, vocation, ...rest }) {
	let imgClass = img ? `testimonial-has-img` : "testimonial-no-img";
	const allClasses = classnames("testimonial", className, imgClass);

	return (
		<>
			{img ? (
				// has an image
				<section className={allClasses} {...rest}>
					<div className='testimonial-img-container'>
						<div className='testimonial-img'>
							<img src={img} alt='head shot' />
						</div>
					</div>
					<div className='testimonial-text-container'>
						<span className='testimonial-icon'>
							<ImQuotesLeft />
						</span>
						{text && <p className='testimonial-text'>{text}</p>}
						{name && <p className='testimonial-name'>{name}</p>}
						{vocation && <p className='testimonial-vocation'>{vocation}</p>}
					</div>
				</section>
			) : (
				// has no image and or a logo
				<section className={allClasses} {...rest}>
					<div className='testimonial-text-container no-img'>
						{logo && <img src={logo} alt='head shot' width={"20%"} />}
						{text && <p className='testimonial-text'>"{text}"</p>}
						<div className='testimonial-name-container'>
							{name && <p className='testimonial-name'>{name}</p>}
							{vocation && (
								<p className='testimonial-vocation'>
									<span className='dash'>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
									{vocation}
								</p>
							)}
						</div>
					</div>
				</section>
			)}
		</>
	);
}

function TestimonialMobile({ children, className, img, logo, text, name, vocation, ...rest }) {
	let imgClass = img ? `testimonial-has-img` : "testimonial-no-img";
	const allClasses = classnames("testimonial", className, imgClass);

	return (
		<>
			{img ? (
				// has an image
				<section className={allClasses} {...rest}>
					<div className='testimonial-img-container'>
						<div className='testimonial-img'>
							<img src={img} alt='head shot' />
						</div>
					</div>
					<div className='testimonial-text-container'>
						<span className='testimonial-icon'>
							<ImQuotesLeft />
						</span>
						{text && <p className='testimonial-text'>{text}</p>}
						{name && <p className='testimonial-name'>{name}</p>}
						{vocation && <p className='testimonial-vocation'>{vocation}</p>}
					</div>
				</section>
			) : (
				// has no image and or a logo
				<section className={allClasses} {...rest}>
					<div className='testimonial-text-container no-img'>
						{logo && <img src={logo} alt='head shot' width={"20%"} />}
						{text && <p className='testimonial-text'>"{text}"</p>}
						<div className='testimonial-name-container'>
							{name && <p className='testimonial-name'>{name}</p>}
							{vocation && (
								<p className='testimonial-vocation'>
									<span className='dash'>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
									{vocation}
								</p>
							)}
						</div>
					</div>
				</section>
			)}
		</>
	);
}

export { Testimonial, TestimonialMobile };
