

import styled from 'styled-components'
import * as vars from './style/variables'

export const AppWrapper = styled.div`

  .footer{
    border: 1px solid orange;
  }
    

`

//
// export const SectionWrapper = styled.div.attrs({
//     // tColor: (props => props.color) || 'blue' 中(props => props.color) ,已经定义 了,不可能没有值,所以会始终取到函数,导致默认值失效
//     // tColor: (props => props.color) || 'blue' // 当没有传颜色时,设置的默认参数[这里达不到想要的效果,因为会始终取到函数,]
//     tColor: (props => props.color) || 'blue' // 当没有传颜色时,设置的默认参数[这里达不到想要的效果,因为会始终取到函数,]
// })`

// 可以接收外部传入的参数
export const SectionWrapper = styled.div.attrs(props =>{
    return {
        tColor:props.color || 'blue' // 设置默认值
    }
})`

    border: 1px solid red;
  
  .title {
    font-size: ${props => props.size}px;
    color:${props => props.tColor};
    &:hover{
      background-color: black;
    }
  }
  .content{
    font-size: ${vars.largeSize}px;
    color: ${vars.primaryColor};
  }
    
    `
