import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

export default tseslint.config(
	// add more generic rulesets here, such as:
	// js.configs.recommended,
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs['flat/recommended'],

	// ...pluginVue.configs['flat/vue2-recommended'], // Use this if you are using Vue.js 2.x.
	{
		rules: {
			// override/add rules settings here, such as:
			// 'vue/no-unused-vars': 'error'
		}
	}
)
