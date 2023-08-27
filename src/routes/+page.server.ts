import prisma from '$lib/server/prisma';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const searchText = data.get('searchText');
		if (!searchText) {
			throw 'invalid input';
		}

		const result = await findFoodBySearchText({ searchText });
		if (!result) {
			const errorMessage = `Unable to find information about: ${searchText}`;
			console.error(errorMessage);
			throw errorMessage;
		}
		return result;
	}
} satisfies Actions;

async function findFoodBySearchText({ searchText }: { searchText: FormDataEntryValue }) {
	return prisma.food.findFirst({
		where: {
			name: {
				contains: String(searchText),
				mode: 'insensitive'
			}
		}
	});
}
