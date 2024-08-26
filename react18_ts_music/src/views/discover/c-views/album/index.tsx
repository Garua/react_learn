import React, { memo, FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Album: FC<IProps> = () => {
  return <div>Album</div>
}

// 设置props的默认值
Album.defaultProps = {}

export default memo(Album)
