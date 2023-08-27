import { writable } from 'svelte/store';
import type { foods } from '@prisma/client';

export const selectedFood = writable<foods>();
