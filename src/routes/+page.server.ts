import prisma from '$lib/server/prisma';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const searchText = data.get('searchText');
		if (!searchText) {
			throw 'invalid input';
		}

		const result = await findFoodBySubType(searchText);
		console.log('ASDF', result);
	}
} satisfies Actions;

async function findFoodBySubType(text: FormDataEntryValue) {
	return prisma.foods.findFirst({
		where: {
			subType: {
				contains: String(text),
				mode: 'insensitive'
			}
		}
	});
}
