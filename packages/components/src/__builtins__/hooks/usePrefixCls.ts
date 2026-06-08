import { ConfigProvider } from 'antd'
import { useContext } from 'react'

export const usePrefixCls = (
  tag?: string,
  props?: {
    prefixCls?: string
  }
) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext)
  return getPrefixCls(tag, props?.prefixCls)
}
