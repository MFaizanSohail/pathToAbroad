import {configureStore} from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { rolesReducer } from './rolesReducer'


const store= configureStore({
    reducer:{
        root:rootReducer,
        role:rolesReducer
    }
})

export default store