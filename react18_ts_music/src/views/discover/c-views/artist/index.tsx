import React, { memo, FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Artist: FC<IProps> = () => {
  return <div>Artist</div>
}

// 设置props的默认值
Artist.defaultProps = {}

export default memo(Artist)
