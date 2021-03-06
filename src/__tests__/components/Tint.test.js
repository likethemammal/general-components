import React from 'react'
import {shallow} from 'enzyme'

import * as shared from '../_shared/tests'
import Tint from '../../components/Tint'


const component_jsx = <Tint />

describe('Tint', () => {

    const component = shallow(
        component_jsx,
    )

    shared.SNAPSHOTS_SHOULD_MATCH([
        component,
    ])
})