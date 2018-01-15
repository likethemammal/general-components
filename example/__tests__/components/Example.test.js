import React from 'react'
import {shallow} from 'enzyme'

import shared from '../../../bin/__tests__/_shared/tests'
import Example from '../../../example/components/Example.unit'


const changeAction = jest.fn()
const component_jsx = <Example
    changeAction={changeAction}
    on={true}
/>

describe('Example', () => {
    // Render a checkbox with label in the document
    const component = shallow(
        component_jsx,
    )

    shared.SNAPSHOTS_SHOULD_MATCH([
        component,
    ])

    shared.SHOULD_CALL_MOCK_FROM_SIMULATE(
        component,
        changeAction,
    )
})