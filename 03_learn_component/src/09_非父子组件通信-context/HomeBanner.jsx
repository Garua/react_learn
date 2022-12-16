import ThemeContext from "./context/theme-context";


function HomeBanner() {

    return (
        <div>
            <span>HomeBanner</span>
            {/*  类组件中也能像这样使用 */}
            <ThemeContext.Consumer>
                {
                    value => {
                        return <h2>HomeBanner theme: {value.color}</h2>
                    }
                }
            </ThemeContext.Consumer>
        </div>
    )
}


export default HomeBanner