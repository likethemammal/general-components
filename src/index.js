import DotDotDot from './components/DotDotDot'
import SVG from './components/SVG'
import Tint from './components/Tint'

import * as tests from './__tests__/_shared/tests'
import * as validations from './__tests__/_shared/validations'

import configure from './store/configure'

export default {
    components: {
        DotDotDot,
        SVG,
        Tint,
    },
    store: {
        configure,
    },
    __tests__: {
        _shared: {
            tests,
            validations,
        }
    }
}