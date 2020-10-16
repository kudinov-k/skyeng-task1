import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { TabsModule } from './tabs/tabs.module'
import { TestComponent } from './test.component'
import { ViewResizerModule } from './view-resizer/view-resizer.module'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    TabsModule,
    ViewResizerModule.forRoot({
      medium: 500,
      large: 700
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
