import { Skeleton } from "../skeleton";

export default function IndustriesCardSkeleton() {
	return (
		<div className='w-full flex flex-col lg:gap-8 gap-4 items-center'>

			<Skeleton className="md:w-24 md:h-24 w-16 h-16 rounded-full" />
		

			<div className='w-full flex flex-col md:gap-3 gap-1 justify-center items-center'>
				<Skeleton className="lg:w-20 w-56 h-4 rounded-xl" />
				<Skeleton className="lg:w-56 w-full h-2 rounded-xl mt-4" />
				<Skeleton className="lg:w-56 w-full h-2 rounded-xl" />
				<Skeleton className="lg:w-56 w-full h-2 rounded-xl" />
				<Skeleton className="lg:w-56 w-full h-2 rounded-xl" />
				<Skeleton className="lg:w-56 w-full h-2 rounded-xl" />
			</div>
		</div>
	)
}
