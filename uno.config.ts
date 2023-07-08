import {
  defineConfig,
  presetUno,
  presetWebFonts,
  presetIcons,
  transformerDirectives,
} from 'unocss';
import { TAG_ICON_CLASS_LIST } from './src/consts';

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      fonts: {
        sawarabi: [
          'Sawarabi Mincho',
          'Verdana',
          { name: 'sans-serif', provider: 'none' },
        ],
        fatface: ['Abril Fatface', { name: 'sans-serif', provider: 'none' }],
      },
    }),
    presetIcons(),
  ],
  transformers: [transformerDirectives()],
  theme: {
    fontFamily: {
      hackGen: [
        'HackGen',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    colors: {
      brand: {
        primary: '#202020',
        start: '#323232',
        end: '#0e0e0e',
      },
    },
  },
  // アイコンクラスの動的指定のために、あらかじめアイコンクラスのスタイルを生成しておく
  // ref: https://unocss.dev/guide/extracting#safelist
  safelist: TAG_ICON_CLASS_LIST,
  shortcuts: {
    'custom-after-border-b':
      'after-w-[32px] after-border-b after-content-[""] after-inline-block after-h-[1px] after-absolute after-left-[calc(50%_-_16px)] after-bottom-0 after-border-gray-4 relative',
  },
});
