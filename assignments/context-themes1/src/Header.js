import React from "react"
import { ThemeContextConsumer } from "./themeProvider"

function Header(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <nav className={`${context.theme}-theme`}>
                    <span className="grid">
                        <h3>Home</h3> <h3>About</h3> <h3>Contact</h3>
                    </span>
                </nav>
            )}
        </ThemeContextConsumer>
    )
}

export default Header