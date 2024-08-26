import React, { memo, FC, ReactNode } from 'react'
import { NavWrapper } from '@/views/discover/c-cpns/nav-bar/style'
import { discoverMenu } from '@/assets/data/local_data'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  return (
    <NavWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map((item) => {
          return (
            <div className="item" key={item.link}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </NavWrapper>
  )
}

// 设置props的默认值
NavBar.defaultProps = {}

export default memo(NavBar)
