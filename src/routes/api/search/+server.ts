import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import prisma from '$lib/server/prisma';

export const GET = (async ({ url }) => {
	const searchText = url.searchParams.get('name');

	if (!searchText) {
		console.error('error getting search results, no text provided');
		return json([]);
	}

	const searchResults = await searchFoodsByName(searchText);

	return json(searchResults);
}) satisfies RequestHandler;

async function searchFoodsByName(name: string) {
	return prisma.food.findMany({
		take: 30,
		where: {
			name: {
				contains: name,
				mode: 'insensitive'
			}
		}
	});
}
