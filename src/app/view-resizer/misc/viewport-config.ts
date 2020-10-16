import { InjectionToken } from '@angular/core'

export interface ViewportConfig {
  medium: number
  large: number
}

export const VIEWPORT_CONFIG = new InjectionToken<ViewportConfig>('viewportConfig')
