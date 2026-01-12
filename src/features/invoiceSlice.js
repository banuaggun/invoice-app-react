import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "001", customer: "John Doe", total: 250, status: "Paid" },
    { id: "002", customer: "Jane Montgomery", total: 400, status: "Pending" },
];

const invoiceSlice = createSlice({
    name: "invoices",
    initialState,
    reducers: {
        addInvoice: (state, action) => {
            state.push(action.payload);
        },
        updateInvoice: (state, action) => {
            const index = state.findIndex(inv => inv.id === action.payload.id);
            if (index !== -1) state[index] = action.payload;
        },
        deleteInvoice: (state, action) => {
            return state.filter(inv => inv.id !== action.payload);
        },
    },
});

export const { addInvoice, updateInvoice, deleteInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
