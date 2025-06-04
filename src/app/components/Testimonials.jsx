import { Testimonial, TestimonialMobile } from "./Testimonial/Testimonial";

export default function Testimonials() {
	return (
		<>
			<h3>TESTIMONIALS</h3>
			<div className='testimonials-section'>
				<div className='testimonials-rows'>
					<span className='container-label'>WITH PIC</span>
					<div className='testimonials-columns'>
						<div>
							<p className='item-label'>With overlapping image/Desktop</p>
							<Testimonial
								img='src\assets\head-shot.jpg'
								text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. '
								name='May Andersons'
								vocation='Workcation, CTO'
							/>
						</div>
						<div>
							<p className='item-label'>With overlapping image/Mobile</p>
							<TestimonialMobile
								img='src\assets\head-shot.jpg'
								text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. '
								name='May Andersons'
								vocation='Workcation, CTO'
							/>
						</div>
					</div>

					<span className='container-label'>NO PIC</span>
					<div className='testimonials-columns'>
						<div>
							<p className='item-label'>Simple centered/Desktop</p>
							<Testimonial
								logo='src\assets\generic-logo.png'
								text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. '
								name='May Andersons'
								vocation='Workcation, CTO'
							/>
						</div>
						<div>
							<p className='item-label'>Simple centered/Mobile</p>
							<TestimonialMobile
								logo='src\assets\generic-logo.png'
								text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. '
								name='May Andersons'
								vocation='Workcation, CTO'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
