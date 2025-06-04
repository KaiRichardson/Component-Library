import Card from "./Card/Card";

export default function Cards() {
	return (
		<>
			<h3>CARDS</h3>
			<div className='cards-section'>
				<div className='cards'>
					<div>
						<span className='item-label'>Card</span>
						<Card
							header='Easy Deployment'
							text='Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.'
						/>
					</div>
					<div>
						<span className='item-label'>Card - Hover</span>
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
