import postcss from 'postcss'
import tailwindcss from 'tailwindcss'

import capsizePlugin from '../dist'

const THEME_CONFIG = {
    fontFamily: {
        sans: ['Inter', 'sans-serif'],
    },
    fontMetrics: {
        sans: {
            capHeight: 2048,
            ascent: 2728,
            descent: -680,
            lineGap: 0,
            unitsPerEm: 2816,
        },
    },
}

expect.extend({
    toMatchCss: (received, argument) => {
        let stripped = (str: string) => str.replace(/[;\s]/g, '')

        if (stripped(received) === stripped(argument)) {
            return {
                message: () =>
                    `expected ${received} not to match CSS ${argument}`,
                pass: true,
            }
        } else {
            return {
                message: () => `expected ${received} to match CSS ${argument}`,
                pass: false,
            }
        }
    },
})

describe('Plugin', () => {
    it('generates utility classes with a default root size', async () => {
        return postcss(
            tailwindcss({
                theme: {
                    ...THEME_CONFIG,
                    fontSize: {
                        sm: '14px',
                        md: '1.5rem',
                    },
                    lineHeight: {
                        sm: '20px',
                        md: '2.5rem',
                    },
                },
                corePlugins: false,
                plugins: [capsizePlugin],
            }),
        )
            .process('@tailwind components; @tailwind utilities', {
                from: undefined,
            })
            .then((result) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                expect(result.css).toMatchCss(`
                    .font-sans.text-sm.leading-sm.capsize,
                    .font-sans .text-sm.leading-sm.capsize,
                    .font-sans .text-sm .leading-sm.capsize,
                    .text-sm .font-sans.leading-sm.capsize,
                    .text-sm .font-sans .leading-sm.capsize {
                        padding: 0.05px 0;
                    }

                    .font-sans.text-sm.leading-sm.capsize::before,
                    .font-sans .text-sm.leading-sm.capsize::before,
                    .font-sans .text-sm .leading-sm.capsize::before,
                    .text-sm .font-sans.leading-sm.capsize::before,
                    .text-sm .font-sans .leading-sm.capsize::before {
                        content: '';
                        margin-top: -0.3542em;
                        display: block;
                        height: 0;
                    }

                    .font-sans.text-sm.leading-sm.capsize::after,
                    .font-sans .text-sm.leading-sm.capsize::after,
                    .font-sans .text-sm .leading-sm.capsize::after,
                    .text-sm .font-sans.leading-sm.capsize::after,
                    .text-sm .font-sans .leading-sm.capsize::after {
                        content: '';
                        margin-bottom: -0.3542em;
                        display: block;
                        height: 0;
                    }

                    .font-sans.text-sm.leading-md.capsize,
                    .font-sans .text-sm.leading-md.capsize,
                    .font-sans .text-sm .leading-md.capsize,
                    .text-sm .font-sans.leading-md.capsize,
                    .text-sm .font-sans .leading-md.capsize {
                        padding: 0.05px 0;
                    }

                    .font-sans.text-sm.leading-md.capsize::before,
                    .font-sans .text-sm.leading-md.capsize::before,
                    .font-sans .text-sm .leading-md.capsize::before,
                    .text-sm .font-sans.leading-md.capsize::before,
                    .text-sm .font-sans .leading-md.capsize::before {
                        content: '';
                        margin-top: -1.0685em;
                        display: block;
                        height: 0;
                    }

                    .font-sans.text-sm.leading-md.capsize::after,
                    .font-sans .text-sm.leading-md.capsize::after,
                    .font-sans .text-sm .leading-md.capsize::after,
                    .text-sm .font-sans.leading-md.capsize::after,
                    .text-sm .font-sans .leading-md.capsize::after {
                        content: '';
                        margin-bottom: -1.0685em;
                        display: block;
                        height: 0;
                    }

                    .font-sans.text-md.leading-sm.capsize,
                    .font-sans .text-md.leading-sm.capsize,
                    .font-sans .text-md .leading-sm.capsize,
                    .text-md .font-sans.leading-sm.capsize,
                    .text-md .font-sans .leading-sm.capsize {
                        padding: 0.05px 0;
                    }

                    .font-sans.text-md.leading-sm.capsize::before,
                    .font-sans .text-md.leading-sm.capsize::before,
                    .font-sans .text-md .leading-sm.capsize::before,
                    .text-md .font-sans.leading-sm.capsize::before,
                    .text-md .font-sans .leading-sm.capsize::before {
                        content: '';
                        margin-top: -0.0551em;
                        display: block;
                        height: 0;
                    }

                    .font-sans.text-md.leading-sm.capsize::after,
                    .font-sans .text-md.leading-sm.capsize::after,
                    .font-sans .text-md .leading-sm.capsize::after,
                    .text-md .font-sans.leading-sm.capsize::after,
                    .text-md .font-sans .leading-sm.capsize::after {
                        content: '';
                        margin-bottom: -0.0551em;
                        display: block;
                        height: 0;
                    }

                    .font-sans.text-md.leading-md.capsize,
                    .font-sans .text-md.leading-md.capsize,
                    .font-sans .text-md .leading-md.capsize,
                    .text-md .font-sans.leading-md.capsize,
                    .text-md .font-sans .leading-md.capsize {
                        padding: 0.05px 0;
                    }

                    .font-sans.text-md.leading-md.capsize::before,
                    .font-sans .text-md.leading-md.capsize::before,
                    .font-sans .text-md .leading-md.capsize::before,
                    .text-md .font-sans.leading-md.capsize::before,
                    .text-md .font-sans .leading-md.capsize::before {
                        content: '';
                        margin-top: -0.4718em;
                        display: block;
                        height: 0;
                    }

                    .font-sans.text-md.leading-md.capsize::after,
                    .font-sans .text-md.leading-md.capsize::after,
                    .font-sans .text-md .leading-md.capsize::after,
                    .text-md .font-sans.leading-md.capsize::after,
                    .text-md .font-sans .leading-md.capsize::after {
                        content: '';
                        margin-bottom: -0.4718em;
                        display: block;
                        height: 0;
                    }
                `)
            })
    })

    it('generates utility classes with a custom root size', async () => {
        return postcss(
            tailwindcss({
                theme: {
                    ...THEME_CONFIG,
                    fontSize: {
                        sm: '14px',
                        md: '1.5rem',
                    },
                    lineHeight: {
                        sm: '20px',
                        md: '2.5rem',
                    },
                },
                corePlugins: false,
                plugins: [capsizePlugin({ rootSize: 12 })],
            }),
        )
            .process('@tailwind components; @tailwind utilities', {
                from: undefined,
            })
            .then((result) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                expect(result.css).toMatchCss(`
                    .font-sans.text-sm.leading-sm.capsize,
                    .font-sans .text-sm.leading-sm.capsize,
                    .font-sans .text-sm .leading-sm.capsize,
                    .text-sm .font-sans.leading-sm.capsize,
                    .text-sm .font-sans .leading-sm.capsize {
                        padding: 0.05px 0;
                    }

                    .font-sans.text-sm.leading-sm.capsize::before,
                    .font-sans .text-sm.leading-sm.capsize::before,
                    .font-sans .text-sm .leading-sm.capsize::before,
                    .text-sm .font-sans.leading-sm.capsize::before,
                    .text-sm .font-sans .leading-sm.capsize::before {
                        content: '';
                        margin-top: -0.3542em;
                        display: block;
                        height: 0;
                    }

                    .font-sans.text-sm.leading-sm.capsize::after,
                    .font-sans .text-sm.leading-sm.capsize::after,
                    .font-sans .text-sm .leading-sm.capsize::after,
                    .text-sm .font-sans.leading-sm.capsize::after,
                    .text-sm .font-sans .leading-sm.capsize::after {
                        content: '';
                        margin-bottom: -0.3542em;
                        display: block;
                        height: 0;
                    }

                    .font-sans.text-sm.leading-md.capsize,
                    .font-sans .text-sm.leading-md.capsize,
                    .font-sans .text-sm .leading-md.capsize,
                    .text-sm .font-sans.leading-md.capsize,
                    .text-sm .font-sans .leading-md.capsize {
                        padding: 0.05px 0;
                    }

                    .font-sans.text-sm.leading-md.capsize::before,
                    .font-sans .text-sm.leading-md.capsize::before,
                    .font-sans .text-sm .leading-md.capsize::before,
                    .text-sm .font-sans.leading-md.capsize::before,
                    .text-sm .font-sans .leading-md.capsize::before {
                        content: '';
                        margin-top: -0.7114em;
                        display: block;
                        height: 0;
                    }

                    .font-sans.text-sm.leading-md.capsize::after,
                    .font-sans .text-sm.leading-md.capsize::after,
                    .font-sans .text-sm .leading-md.capsize::after,
                    .text-sm .font-sans.leading-md.capsize::after,
                    .text-sm .font-sans .leading-md.capsize::after {
                        content: '';
                        margin-bottom: -0.7114em;
                        display: block;
                        height: 0;
                    }

                    .font-sans.text-md.leading-sm.capsize,
                    .font-sans .text-md.leading-sm.capsize,
                    .font-sans .text-md .leading-sm.capsize,
                    .text-md .font-sans.leading-sm.capsize,
                    .text-md .font-sans .leading-sm.capsize {
                        padding: 0.05px 0;
                    }

                    .font-sans.text-md.leading-sm.capsize::before,
                    .font-sans .text-md.leading-sm.capsize::before,
                    .font-sans .text-md .leading-sm.capsize::before,
                    .text-md .font-sans.leading-sm.capsize::before,
                    .text-md .font-sans .leading-sm.capsize::before {
                        content: '';
                        margin-top: -0.1947em;
                        display: block;
                        height: 0;
                    }

                    .font-sans.text-md.leading-sm.capsize::after,
                    .font-sans .text-md.leading-sm.capsize::after,
                    .font-sans .text-md .leading-sm.capsize::after,
                    .text-md .font-sans.leading-sm.capsize::after,
                    .text-md .font-sans .leading-sm.capsize::after {
                        content: '';
                        margin-bottom: -0.1947em;
                        display: block;
                        height: 0;
                    }

                    .font-sans.text-md.leading-md.capsize,
                    .font-sans .text-md.leading-md.capsize,
                    .font-sans .text-md .leading-md.capsize,
                    .text-md .font-sans.leading-md.capsize,
                    .text-md .font-sans .leading-md.capsize {
                        padding: 0.05px 0;
                    }

                    .font-sans.text-md.leading-md.capsize::before,
                    .font-sans .text-md.leading-md.capsize::before,
                    .font-sans .text-md .leading-md.capsize::before,
                    .text-md .font-sans.leading-md.capsize::before,
                    .text-md .font-sans .leading-md.capsize::before {
                        content: '';
                        margin-top: -0.4725em;
                        display: block;
                        height: 0;
                    }

                    .font-sans.text-md.leading-md.capsize::after,
                    .font-sans .text-md.leading-md.capsize::after,
                    .font-sans .text-md .leading-md.capsize::after,
                    .text-md .font-sans.leading-md.capsize::after,
                    .text-md .font-sans .leading-md.capsize::after {
                        content: '';
                        margin-bottom: -0.4725em;
                        display: block;
                        height: 0;
                    }
                `)
            })
    })

    it('works with unitless or percentage line-height values', async () => {
        return postcss(
            tailwindcss({
                theme: {
                    ...THEME_CONFIG,
                    fontSize: {
                        sm: '1rem',
                    },
                    lineHeight: {
                        sm: '100%',
                        md: '1.5',
                    },
                },
                corePlugins: false,
                plugins: [capsizePlugin],
            }),
        )
            .process('@tailwind components; @tailwind utilities', {
                from: undefined,
            })
            .then((result) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                expect(result.css).toMatchCss(`
                    .font-sans.text-sm.leading-sm.capsize,
                    .font-sans .text-sm.leading-sm.capsize,
                    .font-sans .text-sm .leading-sm.capsize,
                    .text-sm .font-sans.leading-sm.capsize,
                    .text-sm .font-sans .leading-sm.capsize {
                        padding: 0.05px 0;
                    }

                    .font-sans.text-sm.leading-sm.capsize::before,
                    .font-sans .text-sm.leading-sm.capsize::before,
                    .font-sans .text-sm .leading-sm.capsize::before,
                    .text-sm .font-sans.leading-sm.capsize::before,
                    .text-sm .font-sans .leading-sm.capsize::before {
                        content: '';
                        margin-top: -0.1395em;
                        display: block;
                        height: 0;
                    }

                    .font-sans.text-sm.leading-sm.capsize::after,
                    .font-sans .text-sm.leading-sm.capsize::after,
                    .font-sans .text-sm .leading-sm.capsize::after,
                    .text-sm .font-sans.leading-sm.capsize::after,
                    .text-sm .font-sans .leading-sm.capsize::after {
                        content: '';
                        margin-bottom: -0.1395em;
                        display: block;
                        height: 0;
                    }

                    .font-sans.text-sm.leading-md.capsize,
                    .font-sans .text-sm.leading-md.capsize,
                    .font-sans .text-sm .leading-md.capsize,
                    .text-sm .font-sans.leading-md.capsize,
                    .text-sm .font-sans .leading-md.capsize {
                        padding: 0.05px 0;
                    }

                    .font-sans.text-sm.leading-md.capsize::before,
                    .font-sans .text-sm.leading-md.capsize::before,
                    .font-sans .text-sm .leading-md.capsize::before,
                    .text-sm .font-sans.leading-md.capsize::before,
                    .text-sm .font-sans .leading-md.capsize::before {
                        content: '';
                        margin-top: -0.3895em;
                        display: block;
                        height: 0;
                    }

                    .font-sans.text-sm.leading-md.capsize::after,
                    .font-sans .text-sm.leading-md.capsize::after,
                    .font-sans .text-sm .leading-md.capsize::after,
                    .text-sm .font-sans.leading-md.capsize::after,
                    .text-sm .font-sans .leading-md.capsize::after {
                        content: '';
                        margin-bottom: -0.3895em;
                        display: block;
                        height: 0;
                    }
                `)
            })
    })
})
