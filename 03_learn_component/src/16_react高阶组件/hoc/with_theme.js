import ThemeContext from "../../09_非父子组件通信-context/context/theme-context";


function withTheme(OriginComponent){
    return (props) =>{
        return (
            <ThemeContext.Consumer>
                {
                    value =>{
                      return  <OriginComponent {...value} {...props}/>
                    }
                }
            </ThemeContext.Consumer>
        )
    }
}

export default withTheme