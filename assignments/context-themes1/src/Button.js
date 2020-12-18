import React from "react"
import { ThemeContextConsumer } from "./themeProvider"

function Button(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <div id="button-holder" className={`${context.theme}-theme`}>
                    <button onClick={context.toggleTheme} className={`${context.theme}-theme-button`}>Switch Theme</button>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Button