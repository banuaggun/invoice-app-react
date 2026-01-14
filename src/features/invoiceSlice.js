import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    invoices: JSON.parse(localStorage.getItem("invoices")) || []
};

const invoiceSlice = createSlice({
    name: "invoices",
    initialState,
    reducers: {
        setInvoices: (state, action) => {
            state.invoices = action.payload;
            localStorage.setItem("invoices", JSON.stringify(state.invoices));
        },
        addInvoice: (state, action) => {
            state.invoices.push(action.payload);
            localStorage.setItem("invoices", JSON.stringify(state.invoices));
        },
        updateInvoice: (state, action) => {
            const index = state.invoices.findIndex(inv => inv.id === action.payload.id);
            if (index !== -1) {
                state.invoices[index] = action.payload;
                localStorage.setItem("invoices", JSON.stringify(state.invoices));
            }
        },
        deleteInvoice: (state, action) => {
            state.invoices = state.invoices.filter(inv => inv.id !== action.payload);
            localStorage.setItem("invoices", JSON.stringify(state.invoices));
        }
    }
});

export const { setInvoices, addInvoice, updateInvoice, deleteInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
