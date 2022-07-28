import React from 'react'
import ThemeContext from '../../contexts/themeContext'
import RenderCounter from './RenderCounter'
import RenderHoverCounter from './RenderHoverCounter'

const Content = () => {
    return (
        <div>
            <h1>This is Content</h1>
            <RenderCounter>
                {
                    ({ counter, increaseCounter }) => {
                        return (
                            <ThemeContext.Consumer>
                                {({ theme }) => <RenderHoverCounter counter={counter} increaseCounter={increaseCounter} theme={theme} />}
                            </ThemeContext.Consumer>
                        )
                    }
                }
            </RenderCounter>
        </div>
    )
}

export default Content