import React, { memo, FC, ReactNode, useEffect, useState } from 'react'
import hyRequest from '@/service'

interface IProps {
  children?: ReactNode
}

export interface IBannerData {
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  scm: string
  bannerBizType: string
}

const Recommend: FC<IProps> = () => {
  // 测试网络请求
  const [banners, setBanners] = useState<IBannerData[]>([])
  useEffect(() => {
    hyRequest
      .get({
        url: '/banner'
      })
      .then((res) => {
        setBanners(res.banners)
      })
  }, [])
  return (
    <div>
      {banners?.map((item) => {
        return <div key={item.imageUrl}>{item.imageUrl}</div>
      })}
    </div>
  )
}

// 设置props的默认值
Recommend.defaultProps = {}

export default memo(Recommend)
