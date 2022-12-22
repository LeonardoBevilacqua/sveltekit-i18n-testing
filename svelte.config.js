import adapter from '@sveltejs/adapter-static';

const suportedLocales = ['en', 'pt'];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			entries: suportedLocales.reduce((acc, locale) => [...acc, `/${locale}`], ['*'])
		}
	}
};

export default config;
