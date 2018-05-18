import React from 'react'
import {shallow} from 'enzyme'

import * as shared from '../_shared/tests'
import SVG from '../../components/SVG'


const component_jsx = <SVG />

describe('SVG', () => {

    const component = shallow(
        component_jsx,
    )

    shared.SNAPSHOTS_SHOULD_MATCH([
        component,
    ])
})