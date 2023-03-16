import { Config } from 'tailwindcss'
import theme from './index'

const tailwindConfig: Config = {
  content: [
    './src/**/*.{ts,tsx}'
  ],
  plugins: [],
  theme: {
    extend: {},
    ...theme
  }
}

export default tailwindConfig
