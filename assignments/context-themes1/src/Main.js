import React from "react"
import { ThemeContextConsumer } from "./themeProvider"

function Main(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <div id="main" className={`${context.theme}-theme`}>
                    <div>
                        <h2>Click the botton to toggle the {context.theme === "light" ? "Light" : "Dark"} theme!</h2>
                    </div>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Main