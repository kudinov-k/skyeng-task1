import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { TabContentComponent } from './tabs/tab/tab-content/tab-content.component'
import { TabTitleComponent } from './tabs/tab/tab-title/tab-title.component'
import { TabComponent } from './tabs/tab/tab.component'
import { TabsComponent } from './tabs/tabs.component'


@NgModule({
  declarations: [
    TabsComponent,
    TabComponent,
    TabTitleComponent,
    TabContentComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabsComponent,
    TabComponent,
    TabTitleComponent,
    TabContentComponent,
  ]
})
export class TabsModule {
}
