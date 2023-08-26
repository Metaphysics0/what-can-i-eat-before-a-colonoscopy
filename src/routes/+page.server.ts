import prisma from '$lib/server/prisma';
import type { Actions } from './$types';

export const actions = {
	byText: async ({ request }) => {
		const data = await request.formData();
		const searchText = data.get('searchText');
		if (!searchText) {
			throw 'invalid input';
		}

		const result = await findFoodBySubType({ searchText });
		console.log('RESULT', result);
	},
	search: async ({ request }) => {
		console.log('REQUEST', request);
		const data = await request.formData();
		const searchText = data.get('searchText');
		if (!searchText) {
			throw 'invalid input';
		}

		const result = await findFoodBySubType({ searchText, onlyText: true });
		console.log('RESULT', result);
	}
} satisfies Actions;

async function findFoodBySubType({
	searchText,
	onlyText = false
}: {
	searchText: FormDataEntryValue;
	onlyText?: boolean;
}) {
	const onlyFieldsParam = onlyText
		? {
				select: {
					subType: true
				}
		  }
		: {};

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return prisma.foods.findFirst({
		where: {
			subType: {
				contains: String(searchText),
				mode: 'insensitive'
			}
		},
		...onlyFieldsParam
	});
}
