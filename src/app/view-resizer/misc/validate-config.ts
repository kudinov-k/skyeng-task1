import { ViewportConfig } from './viewport-config'

export const isConfigValid = (config: ViewportConfig): boolean => {
  if (!config.medium || !config.large) {
    return false
  }

  if (config.medium >= config.large) {
    return false
  }

  return true
}
