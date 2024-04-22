// uno.config.ts
import { defineConfig, presetIcons } from 'unocss'
import { presetWind } from 'unocss'
import { presetRadix } from 'unocss-preset-radix'
import { transformerDirectives } from 'unocss'

export default defineConfig({
	presets: [
		presetWind(),
		presetRadix({
			darkSelector: ':root',
			lightSelector: '.never',
			palette: ['mauve', 'pink', 'purple'],
			aliases: {
				primary: 'mauve',
				accent: 'pink'
			}
		}),
		presetIcons()
	],
	transformers: [
		transformerDirectives({
			applyVariable: ['--uno']
		})
	]
})
