import React, { memo, FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Djradio: FC<IProps> = () => {
  return <div>Djradio</div>
}

// 设置props的默认值
Djradio.defaultProps = {}

export default memo(Djradio)
