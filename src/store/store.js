// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "../features/invoiceSlice";
import themeReducer from "../features/themeSlice";

export const store = configureStore({
    reducer: {
        invoices: invoiceReducer,
        theme: themeReducer,
    }
});
