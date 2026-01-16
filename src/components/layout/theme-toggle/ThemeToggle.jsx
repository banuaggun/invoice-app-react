import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../features/themeSlice";

function ThemeToggle() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.mode);

    return (
        <button onClick={() => dispatch(toggleTheme())}>
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
    );
}

export default ThemeToggle;
