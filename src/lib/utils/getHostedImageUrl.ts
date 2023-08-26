import { CLOUDFRONT_HOSTNAME } from '$lib/constants';

export function getHostedImageUrl(imgName: (typeof knownImages)[number]): string {
	return CLOUDFRONT_HOSTNAME + '/' + imgName;
}

// mainly for that sweet TS autocompletion
const knownImages = [
	'background.png',
	'cookie.png',
	'cover.png',
	'Doctor_mobile.png',
	'Doctor_mobile2.png',
	'Doctor_mobile3.png',
	'Doctor.png',
	'Doctor11.png',
	'Doctor11.webp',
	'Doctor22.png',
	'faq.png',
	'Fruits.png',
	'Fruits.webp',
	'logc.png',
	'logo_colo.png',
	'logo_color.png',
	'pizza.png',
	'result.png',
	'result2.png',
	'soup.png',
	'soup.webp',
	'thecoffee.png',
	'thecoffee.webp',
	'webimg.png',
	'webimg1.png'
] as const;
