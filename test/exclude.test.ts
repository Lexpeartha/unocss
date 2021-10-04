import { createGenerator } from 'unocss'

describe('exclude', () => {
  test('basic', async() => {
    const uno = createGenerator()
    const dos = createGenerator({
      warnExcluded: false,
      excluded: [
        'block',
        /^text-/,
      ],
    })
    const { css: css1 } = await uno.generate('block text-red-200')
    const { css: css2 } = await dos.generate('block text-red-200')
    expect(css1).toContain('.block')
    expect(css1).toContain('.text-red-200')
    expect(css2).toBe('')
  })
})