import { defineConfig, presetIcons, presetTypography, presetUno, presetWebFonts } from 'unocss';
import { presetForms } from '@julr/unocss-preset-forms';

export default defineConfig({
	theme: {
		colors: {
			blue: '#0d6efd',
			indigo: '#6610f2',
			purple: '#6f42c1',
			pink: '#d63384',
			red: '#dc3545',
			orange: '#fd7e14',
			yellow: '#ffc107',
			green: '#198754',
			teal: '#20c997',
			cyan: '#0dcaf0',
			black: '#000',
			white: '#fff',
			gray: '#6c757d',
			primary: '#0d6efd',
			secondary: '#6c757d',
			success: '#198754',
			info: '#0dcaf0',
			warning: '#ffc107',
			danger: '#dc3545',
			light: '#f8f9fa',
			dark: '#212529'
		}
	},
	shortcuts: [
		{ logo: 'i-logos:svelte-icon w-7em h-7em transform transition-300' },
		{
			'styled-input':
				'rounded-md border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
		}
	],
	presets: [
		presetUno(),
		presetForms(),
		presetIcons({
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle'
			}
		}),
		presetTypography(),
		presetWebFonts({
			fonts: {
				provider: 'google',
				// these will extend the default theme
				sans: 'Crimson Text',
				mono: ['Fira Code', 'Fira Mono:400,700']
			}
		})
	],
	safelist: ['bg-orange-300', 'prose', 'styled-input']
});
