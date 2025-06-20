import { createSystem, defaultConfig } from '@chakra-ui/react';

export const system = createSystem(defaultConfig, {
	theme: {
		tokens: {
			fonts: {
				heading: { value: `'Work Sans', 'Oswald' !important` },
				body: { value: `'Work Sans', 'Oswald' !important` },
			},
			cursor: {
				button: { value: 'pointer' },
				radio: { value: 'pointer' },
				checkbox: { value: 'pointer' },
				input: { value: 'text' },
				option: { value: 'pointer' },
				disabled: { value: 'not-allowed' },
				slider: { value: 'grab' },
			},
			// colors: {
			// 	primary: '#BADEFC',
			// 	secondary: '#5A9EF8',
			// },
		},
	},
});
