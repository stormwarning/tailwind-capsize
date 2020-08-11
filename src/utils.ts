export function normalizeValue(value: string, root?: number): number {
    if (!root) root = 16

    let isPixelValue = value.endsWith('px')
    let isRemValue = value.endsWith('rem')

    if (isPixelValue) return parseInt(value.replace('px', ''))
    if (isRemValue) return root * parseFloat(value.replace('rem', ''))

    return parseInt(value)
}

const cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/

export function getValueAndUnit(value: string): [number, string | undefined] {
    if (typeof value !== 'string') return [value, '']
    const matchedValue = value.match(cssRegex)
    if (matchedValue) return [parseFloat(value), matchedValue[2]]
    return [parseInt(value), undefined]
}

export function makeCssSelectors(
    fontFamily: string,
    sizeName: string,
    leading: string,
): string {
    return (
        `.font-${fontFamily}.text-${sizeName}.leading-${leading}.baseline, ` +
        `.font-${fontFamily} .text-${sizeName}.leading-${leading}.baseline, ` +
        `.font-${fontFamily} .text-${sizeName} .leading-${leading}.baseline ,` +
        `.text-${sizeName} .font-${fontFamily}.leading-${leading}.baseline, ` +
        `.text-${sizeName} .font-${fontFamily} .leading-${leading}.baseline`
    )
}
