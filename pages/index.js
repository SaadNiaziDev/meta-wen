import Image from "next/image";
import { Inter } from "next/font/google";
import { Card } from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Landing() {
	return (
		<div className='container'>
			<div className='flex justify-center items-center align-middle'>
				<Card />
			</div>
		</div>
	);
}
