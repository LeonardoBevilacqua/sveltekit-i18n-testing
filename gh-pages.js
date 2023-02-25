
import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/LeonardoBevilacqua/sveltekit-i18n-testing.git',
		user: {
			name: 'Leonardo Bevilacqua',
			email: 'leonardo_bevilacqua@hotmail.com'
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);