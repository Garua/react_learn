import React, { memo, FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Songs: FC<IProps> = () => {
  return <div>Songs</div>
}

// 设置props的默认值
Songs.defaultProps = {}

export default memo(Songs)
