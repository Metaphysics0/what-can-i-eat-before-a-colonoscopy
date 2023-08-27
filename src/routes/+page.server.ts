import prisma from '$lib/server/prisma';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const searchText = data.get('searchText');
		if (!searchText) {
			throw 'invalid input';
		}

		const result = await findFoodBySubType({ searchText });
		console.log('RESULT', result);
	}
} satisfies Actions;

async function findFoodBySubType({ searchText }: { searchText: FormDataEntryValue }) {
	return prisma.foods.findFirst({
		where: {
			subType: {
				contains: String(searchText),
				mode: 'insensitive'
			}
		}
	});
}
