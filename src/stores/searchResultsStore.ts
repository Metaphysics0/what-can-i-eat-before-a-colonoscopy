import { writable } from 'svelte/store';
import type { Food } from '@prisma/client';

export const searchResultsStore = writable<Food[]>([]);