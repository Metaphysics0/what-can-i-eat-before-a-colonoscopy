import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST = (async ({ request }) => {
	const requestData = await request.json();
	return json({});
}) satisfies RequestHandler;
