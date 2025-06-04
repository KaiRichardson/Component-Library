import Badge from "./Badge/Badge";

export default function Badges() {
	return (
		<>
			<h3>BADGES</h3>
			<div className='badges'>
				<div className='badge-container'>
					<span className='container-label'>SQUARE</span>
					<div className='badge-subContainer'>
						<span className='item-label'>Gray - Square</span>
						<Badge variant='square' size='md'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<span className='item-label'>Red - Square</span>
						<Badge variant='square' size='md' color='red'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<span className='item-label'>Yellow - Square</span>
						<Badge variant='square' size='md' color='yellow'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<span className='item-label'>Green - Square</span>
						<Badge variant='square' size='md' color='green'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<span className='item-label'>Blue - Square</span>
						<Badge variant='square' size='md' color='blue'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<span className='item-label'>Purple - Square</span>
						<Badge variant='square' size='md' color='purple'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<span className='item-label'>Pink - Square</span>
						<Badge variant='square' size='md' color='pink'>
							Badge
						</Badge>
					</div>

					<span className='container-label'>PILL</span>
					<div className='badge-subContainer'>
						<span className='item-label'>Gray - Pill</span>
						<Badge variant='pill' size='md'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<span className='item-label'>Red - Pill</span>
						<Badge variant='pill' size='md' color='red'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<span className='item-label'>Yellow - Pill</span>
						<Badge variant='pill' size='md' color='yellow'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<span className='item-label'>Green - Pill</span>
						<Badge variant='pill' size='md' color='green'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<span className='item-label'>Blue - Pill</span>
						<Badge variant='pill' size='md' color='blue'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<span className='item-label'>Purple - Pill</span>
						<Badge variant='pill' size='md' color='purple'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<span className='item-label'>Pink - Pill</span>
						<Badge variant='pill' size='md' color='pink'>
							Badge
						</Badge>
					</div>
				</div>
			</div>
		</>
	);
}
