export const NO_VALUE = function(func, error) {
    test('if no value, error', () => {
        expect(() => {
            func()
        }).toThrow(error)
    })
}

export const NO_LENGTH = function(func, error) {
    test('if no length, error', () => {
        expect(() => {
            func('')
        }).toThrow(error)
    })
}

export const NO_LENGTH_IS_ARRAY = function(func, error) {
    test('if is array, but has no length, error', () => {
        expect(() => {
            func([])
        }).toThrow(error)
    })
}

export const NO_KEYS = function(func, error) {
    test('if has no object keys, error', () => {
        expect(() => {
            func({})
        }).toThrow(error)
    })
}

export const NOT_ARRAY = function(func, error) {
    test('if value not array, error', () => {
        expect(() => {
            func({})
        }).toThrow(error)
    })
}

export const NOT_STRING_BUT_EXIST = function(func, error) {
    test('if value not string, error', () => {
        expect(() => {
            func({})
        }).toThrow(error)
    })
}
