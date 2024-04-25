// uno.config.ts
import { defineConfig, presetIcons } from 'unocss'
import { presetMini } from 'unocss'
import { presetRadix } from 'unocss-preset-radix'
import { transformerDirectives } from 'unocss'

export default defineConfig({
	presets: [
		presetMini(),
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
	],
	shortcuts: {
		'title-hero': 'font-bold font-[Ubuntu] text-6xl text-accent-11 mb-2 text-center'
	}
})
