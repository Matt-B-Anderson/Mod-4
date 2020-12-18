import React from "react"
import { ThemeContextConsumer } from "./themeProvider"

function Footer(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <footer className={`${context.theme}-theme`}>
                    <p>
                        Insert something really cool about changing themes here.
                    </p>
                </footer>
            )}
        </ThemeContextConsumer>
    )
}

export default Footer