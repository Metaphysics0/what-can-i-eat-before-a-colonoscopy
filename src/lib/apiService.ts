import type { Food } from '@prisma/client';

export const apiService = {
	search: {
		byName: async (name: string): Promise<Food[]> => {
			return fetchAndReturnJson({
				endpoint: 'search',
				method: 'GET',
				params: { name }
			});
		}
	}
};

const fetchAndReturnJson = async (args: IMakeApiArgs) => (await make(args)).json();

function make({ endpoint, method, params }: IMakeApiArgs): Promise<Response> {
	let baseUrl = `/api/${endpoint}`;
	if (method === 'GET' && params) {
		// TS-Ignoring here because params are optional for GET routes
		//
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		baseUrl += '?' + new URLSearchParams(params).toString();
	}

	const options = {
		method,
		headers: {
			'content-type': 'application/json'
		}
	};
	const body = method !== 'GET' && params ? JSON.stringify(params) : null;
	return fetch(baseUrl, body ? { ...options, body } : options);
}

interface IMakeApiArgs {
	endpoint: string;
	method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
	params?: unknown;
}
