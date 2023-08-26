import { start_prisma } from '$lib/server/prisma';

start_prisma()
	.then(() => {
		console.log('🟢 Prisma connected');
	})
	.catch((e) => {
		console.error('🔴 Error starting prisma', e);
	});
