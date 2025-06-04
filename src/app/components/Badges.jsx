import Badge from "./Badge/Badge";

export default function Badges() {
	return (
		<>
			<h3>BADGES</h3>
			<div className='badges'>
				<div className='badge-container'>
					<span className='container-label'>SQUARE</span>
					<div className='badge-subContainer'>
						<p className='item-label'>Gray - Square</p>
						<Badge variant='square' size='md'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<p className='item-label'>Red - Square</p>
						<Badge variant='square' size='md' color='red'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<p className='item-label'>Yellow - Square</p>
						<Badge variant='square' size='md' color='yellow'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<p className='item-label'>Green - Square</p>
						<Badge variant='square' size='md' color='green'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<p className='item-label'>Blue - Square</p>
						<Badge variant='square' size='md' color='blue'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<p className='item-label'>Purple - Square</p>
						<Badge variant='square' size='md' color='purple'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<p className='item-label'>Pink - Square</p>
						<Badge variant='square' size='md' color='pink'>
							Badge
						</Badge>
					</div>

					<span className='container-label'>PILL</span>
					<div className='badge-subContainer'>
						<p className='item-label'>Gray - Pill</p>
						<Badge variant='pill' size='md'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<p className='item-label'>Red - Pill</p>
						<Badge variant='pill' size='md' color='red'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<p className='item-label'>Yellow - Pill</p>
						<Badge variant='pill' size='md' color='yellow'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<p className='item-label'>Green - Pill</p>
						<Badge variant='pill' size='md' color='green'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<p className='item-label'>Blue - Pill</p>
						<Badge variant='pill' size='md' color='blue'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<p className='item-label'>Purple - Pill</p>
						<Badge variant='pill' size='md' color='purple'>
							Badge
						</Badge>
					</div>
					<div className='badge-subContainer'>
						<p className='item-label'>Pink - Pill</p>
						<Badge variant='pill' size='md' color='pink'>
							Badge
						</Badge>
					</div>
				</div>
			</div>
		</>
	);
}
