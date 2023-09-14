import { db } from '@/lib/db';
import { notFound } from 'next/navigation';

interface PageProps {
	params: {
		slug: string;
	};
}
// page
const page = async ({ params }: PageProps) => {
	const subreddit = await db.subreddit.findFirst({
		where: {
			name: params.slug,
		},
	});

	if (!subreddit) return notFound();
	return <div>page</div>;
};

export default page;
