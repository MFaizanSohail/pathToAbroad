const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const blogsSlice = createSlice({
    name: 'blogs',
    initialState: {
        blogsData: [],
        status: STATUSES.IDLE, 
    },
    reducers: {
        setBlogs(state, action) {
            state.blogsData = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    }, 
});

export const { setBlogs, setStatus } = blogsSlice.actions;
export default blogsSlice.reducer;

// Thunks
 
export function fetchBlogs() {
    return async function fetchBlogsThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const res = await fetch('http://localhost:4000/blog/');
            const data = await res.json();
            dispatch(setBlogs(data));
            dispatch(setStatus(STATUSES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}