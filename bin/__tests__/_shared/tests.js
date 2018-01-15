import toJSON from 'enzyme-to-json'

import SVG from '../../components/SVG'

const SHOULD_HAVE_CHILDREN = function(component, componentName) {
    test(`if children, ${componentName} should receive those children`, () => {
        expect(
            component.children().exists()
        ).toBeTruthy()
    })
}

const SNAPSHOTS_SHOULD_MATCH = function(components) {
    components.map(function (component, i) {
        test(`Snapshot ${i} should match`, () => {
            expect(toJSON(component)).toMatchSnapshot()
        })
    })
}

const SHOULD_CALL_MOCK_FROM_SIMULATE = function(component, mockFunc) {
    test('mock is called when button is clicked', () => {
        component.simulate('click')

        expect(
            mockFunc.mock.calls.length
        ).toEqual(1)
    })
}

const SHOULD_CALL_MOCK_FROM_FUNCTION = function(func, mockFunc) {
    test(`mock is called when ${func.name} is called`, () => {
        func()

        expect(
            mockFunc.mock.calls.length
        ).toEqual(1)
    })
}

const INPUT_SHOULD_RECEIVE_DISABLED = function(input) {
    test('if disabled, input/button should receive disabled', () => {
        expect(
            input.getDOMNode().disabled
        ).toBeTruthy()
    })
}

const SVG_SHOULD_RECEIVE_RAW = function (component, raw) {
    test('should receive raw as SVG raw', () => {
        expect(
            component.find(SVG).props().raw
        ).toEqual(raw)
    })
}

const SHOULD_RETURN_NULL = function (component) {
    test('should not be rendered', () => {
        expect(
            component.debug()
        ).toBeFalsy()
    })
}

module.exports = {
    SNAPSHOTS_SHOULD_MATCH,
    SHOULD_HAVE_CHILDREN,
    SHOULD_CALL_MOCK_FROM_SIMULATE,
    SHOULD_CALL_MOCK_FROM_FUNCTION,
    INPUT_SHOULD_RECEIVE_DISABLED,
    SVG_SHOULD_RECEIVE_RAW,
    SHOULD_RETURN_NULL,
}