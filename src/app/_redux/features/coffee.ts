import { Extra, ExtraSubselection } from '@/app/_types/extra'
import { Size } from '@/app/_types/size'
import { Type } from '@/app/_types/type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'


export interface Coffee {
    type?: Type,
    size?: Size,
    extra?: Extra
    subselection?: ExtraSubselection
}

const initialState: Coffee = {}

const coffeeSlice = createSlice({
    name: 'coffee',
    initialState: initialState,
    reducers: {
        updateType(state, action: PayloadAction<Type>) {
            state.type = action.payload
        },
        updateSize(state, action: PayloadAction<Size>) {
            state.size = action.payload
        },
        updateExtra(state, action: PayloadAction<Extra>) {
            state.extra = action.payload
        },
        updateSubselection(state, action: PayloadAction<ExtraSubselection>){
            state.subselection = action.payload
        }
    }
})

export const coffeeSelector = ((state: RootState) => state.coffee)
export const { updateType, updateExtra, updateSize, updateSubselection } = coffeeSlice.actions
export default coffeeSlice.reducer
