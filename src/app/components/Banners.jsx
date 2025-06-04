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

					<div className='banner-item'>
						<p className='item-label'>Success - Multiline</p>
						<Banner
							variant='success'
							title='Congratulations'
							text='Lorem ipsum dolor sit amet consectetur adipiasd asdsicing elit. '
						/>
					</div>

					<span className='container-label'>WARNING</span>

					<div className='banner-item'>
						<p className='item-label'>Warning - Multiline</p>
						<Banner
							variant='warning'
							title='Attention'
							text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.'
						/>
					</div>

					<span className='container-label'>ERROR</span>

					<div className='banner-item'>
						<p className='item-label'>Warning - Multiline</p>
						<Banner
							variant='error'
							title='There is a problem with your application'
							text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur,  veniam quo totam eius aperiam dolorum.'
						/>
					</div>

					<span className='container-label'>NEUTRAL</span>

					<div className='banner-item'>
						<p className='item-label'>Neutral - Multiline</p>
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

					<div className='banner-item'>
						<p className='item-label'>Success - Multiline</p>
						<Banner variant='success' title='Congratulations' />
					</div>

					<span className='container-label'>WARNING</span>

					<div className='banner-item'>
						<p className='item-label'>Warning - Multiline</p>
						<Banner variant='warning' title='Attention' />
					</div>

					<span className='container-label'>ERROR</span>

					<div className='banner-item'>
						<p className='item-label'>Warning - Multiline</p>
						<Banner variant='error' title='There is a problem with your application' />
					</div>

					<span className='container-label'>NEUTRAL</span>

					<div className='banner-item'>
						<p className='item-label'>Neutral - Multiline</p>
						<Banner variant='neutral' title='Update available' />
					</div>
				</div>
			</div>
		</>
	);
}
