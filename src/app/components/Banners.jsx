import Banner from "./Banner/Banner";

export default function Banners() {
	return (
		<>
			<h3>BANNERS</h3>
			<div className='banners-section'>
				{/* Multi Line */}
				{/* <span className='container-label-top'>MULTI LINE</span> */}
				<div className='banner-container'>
					<span className='container-label'>SUCCESS</span>

					<div>
						<span className='item-label'>Success - Multiline</span>
						<Banner
							variant='success'
							title='Congratulations'
							text='Lorem ipsum dolor sit amet consectetur adipisicing elit. '
						/>
					</div>

					<span className='container-label'>WARNING</span>

					<div>
						<span className='item-label'>Warning - Multiline</span>
						<Banner
							variant='warning'
							title='Attention'
							text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.'
						/>
					</div>

					<span className='container-label'>ERROR</span>

					<div>
						<span className='item-label'>Warning - Multiline</span>
						<Banner
							variant='error'
							title='There is a problem with your application'
							text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur,  veniam quo totam eius aperiam dolorum.'
						/>
					</div>

					<span className='container-label'>NEUTRAL</span>

					<div>
						<span className='item-label'>Neutral - Multiline</span>
						<Banner
							variant='neutral'
							title='Update available'
							text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'
						/>
					</div>
				</div>

				{/* Single Line */}
				{/* <span className='container-label-top'>SINGLE LINE</span> */}
				<div className='banner-container'>
					<span className='container-label'>SUCCESS</span>

					<div>
						<span className='item-label'>Success - Multiline</span>
						<Banner variant='success' title='Congratulations' />
					</div>

					<span className='container-label'>WARNING</span>

					<div>
						<span className='item-label'>Warning - Multiline</span>
						<Banner variant='warning' title='Attention' />
					</div>

					<span className='container-label'>ERROR</span>

					<div>
						<span className='item-label'>Warning - Multiline</span>
						<Banner
							variant='error'
							title='There is a problem with your application'
						/>
					</div>

					<span className='container-label'>NEUTRAL</span>

					<div>
						<span className='item-label'>Neutral - Multiline</span>
						<Banner variant='neutral' title='Update available' />
					</div>
				</div>
			</div>
		</>
	);
}
