import Link from "next/link";
import React from "react";
import metamask from "../../public/metamask.png";

const Navbar = () => {
	return (
		<div className='container'>
			<div className='flex justify-around items-center w-100 h-16'>
				<div className='flex justify-center items-center gap-4 space-x-3'>
					<Link href='/'>
						<img src='/wallet-connect.png' className='rounded-3xl border-none w-8 h-8 text-lg' />
					</Link>
					<Link href='/collection' className='text-lg'>
						Collection
					</Link>
					<Link href='/watchlist' className='text-lg'>
						Watchlist
					</Link>
					<Link href='/collection' className='text-lg'>
						Profile
					</Link>
				</div>
				<div className='flex justify-center items-center'>
					<button class='btn'>
						<img src='/metamask.png' alt='' />
						Connect Wallet
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
