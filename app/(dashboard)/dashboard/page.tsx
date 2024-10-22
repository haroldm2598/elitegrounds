'use client';

import HeadingSection from '@/components/reusable/HeadingSection';
import { lato } from '@/lib/font';

// import { useState, useEffect } from 'react';
// import { supabase } from '@/utils/supabase/server';
// import { NewsItemProps } from '@/lib/definitions';

// itong pag fefetch ko dapat nasa news data to instead nasa dashboard
// ang purpose ni dashboard is makita lang yun mga laman nung news and guide as in count ganon tapos may mga guide paano siya gagawen

export default function DashboardPage() {
	// const [fetchError, setFetchError] = useState<string | null>(null);
	// const [fetchData, setFetchData] = useState<NewsItemProps[] | null>(null);

	// useEffect(() => {
	// 	const fetchSupabaseData = async () => {
	// 		const { data: news, error } = await supabase.from('news').select();

	// 		if (error) {
	// 			setFetchError('Could not fetch the data the news');
	// 			setFetchData(null);
	// 			console.log(error);
	// 		}

	// 		if (news) {
	// 			setFetchData(news);
	// 			setFetchError(null);
	// 		}
	// 	};

	// 	fetchSupabaseData();
	// }, []);

	return (
		<section className='max-w-7xl mx-auto pt-10 lg:px-4 xl:px-0'>
			{/* {fetchError && <h1>{fetchError}</h1>}
			{fetchData &&
				fetchData?.map((item) => {
					return (
						<section key={item.id} className='flex flex-col gap-10'>
							<h1>{item.title}</h1>
							<p>{item.description}</p>
							<h6>{new Date(item.created_at).toLocaleDateString('en-CA')}</h6>
						</section>
					);
				})} */}
			<HeadingSection title='Dashboard' />

			<section
				className={`${lato.className} mt-8 font-semibold text-[2rem] text-custom-main200 -space-y-2`}
			>
				<h1>News count content: 100</h1>
				<h1>Guide count content: 23</h1>
			</section>
		</section>
	);
}
