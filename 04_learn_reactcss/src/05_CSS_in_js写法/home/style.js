import styled from "styled-components";

const HYButton = styled.button`
  border: 1px solid red;
  border-radius: 5px;

`

// 继续自上面 的HYButton属性
export const HYButtonWrapper = styled(HYButton)`
  background-color: #0f0;
  color:#fff

`


export const HomeWrapper = styled.div`
  .top {
    .banner {
      color: red;
    }
  }

  .bottom {
    .header {
      //获取themeContext共享的主题数据
      color: ${props => props.theme.color};
      font-size: ${props => props.theme.size};
    }

    .product-list {
      .item {
        color: blue
      }
    }
  }



`