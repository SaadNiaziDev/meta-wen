import React from "react";

export const Card = () => {
	return (
		<div className='card w-96 bg-base-100 shadow-xl'>
			<figure>
				<img src='/doodles.png' alt='Shoes' />
			</figure>
			<div className='card-body'>
				<div className='flex flex-row justify-between items-center'>
					<div className='flex flex-row items-center gap-3'>
						<img src='/doodles.png' className='rounded-xl w-10 h-10' />
						UGLY PEOPLE
					</div>
					<div>
						<img src='/doodles.png' className='rounded-xl w-10 h-10' />
					</div>
				</div>

				<h2 className='card-title'>---</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className='card-actions justify-end'>
					<button className='btn btn-primary'>Buy Now</button>
				</div>
			</div>
		</div>
	);
};
