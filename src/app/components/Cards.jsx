import Card from "./Card/Card";

export default function Cards() {
	return (
		<>
			<h3>CARDS</h3>
			<div className='cards-section'>
				<div className='cards'>
					<div>
						<p className='item-label'>Card</p>
						<Card
							header='Easy Deployment'
							text='Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.'
						/>
					</div>
					<div>
						<p className='item-label'>Card - Hover</p>
						<Card
							button={true}
							header='Easy Deployment'
							text='Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.'
						/>
					</div>
				</div>
			</div>
		</>
	);
}
