import React from 'react'
import {shallow} from 'enzyme'

import shared from '../_shared/tests'
import Tint from '../../components/Tint'


const component_jsx = <Tint />

describe('Tint', () => {
    // Render a checkbox with label in the document
    const component = shallow(
        component_jsx,
    )

    shared.SNAPSHOTS_SHOULD_MATCH([
        component,
    ])
})