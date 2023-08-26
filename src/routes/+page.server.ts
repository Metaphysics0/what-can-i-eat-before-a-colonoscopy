import type { Actions } from './$types';
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const searchText = data.get('searchText');
		console.log('SEARCH TEXT', searchText);
	}
} satisfies Actions;
