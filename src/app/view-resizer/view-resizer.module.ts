import { CommonModule } from '@angular/common'
import { ModuleWithProviders, NgModule } from '@angular/core'
import { IfViewportSizeDirective } from './if-viewport-size.directive'
import { isConfigValid } from './misc/validate-config'
import { VIEWPORT_CONFIG, ViewportConfig } from './misc/viewport-config'
import { ViewportWidthService } from './viewport-width.service'


@NgModule({
  declarations: [
    IfViewportSizeDirective
  ],
  exports: [
    IfViewportSizeDirective
  ],
  imports: [
    CommonModule
  ]
})
export class ViewResizerModule {
  static forRoot(
    viewportConfig: ViewportConfig
  ): ModuleWithProviders<ViewResizerModule> {
    return {
      ngModule: ViewResizerModule,
      providers: [
        {
          provide: VIEWPORT_CONFIG,
          useFactory: () => {
            if (isConfigValid(viewportConfig)) {
              return {...viewportConfig} as ViewportConfig
            } else {
              throw new Error('Invalid config')
            }
          },
        },
        ViewportWidthService
      ]
    }
  }
}
