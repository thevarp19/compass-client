import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormikState {
    values: any;
    errors: any;
}

interface SliceState {
    formik: FormikState | null;
}

const initialState: SliceState = {
    formik: null,
};

export const formikSlice = createSlice({
    name: "formikSlice",
    initialState,
    reducers: {
        setFormik: (state, action: PayloadAction<FormikState | null>) => {
            state.formik = action.payload;
        },
    },
});

export const { setFormik } = formikSlice.actions;

export default formikSlice.reducer;
