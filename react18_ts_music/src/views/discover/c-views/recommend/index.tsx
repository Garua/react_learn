import React, { memo, FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  return <div>Recommend</div>
}

// 设置props的默认值
Recommend.defaultProps = {}

export default memo(Recommend)
