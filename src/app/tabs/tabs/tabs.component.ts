import { Component, ContentChildren, QueryList } from '@angular/core'
import { TabContentComponent } from './tab/tab-content/tab-content.component'
import { TabTitleComponent } from './tab/tab-title/tab-title.component'

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  @ContentChildren(TabTitleComponent, {descendants: true}) tabTitles: QueryList<TabTitleComponent>
  @ContentChildren(TabContentComponent, {descendants: true}) tabContents: QueryList<TabContentComponent>

  selectedTabIndex = 0

  constructor() {
  }

  selectTab(index: number): void {
    this.selectedTabIndex = index
  }

  removeTab(index: number): void {
    this.tabTitles = this.tabTitles.filter(
      (item, i) => index !== i
    ) as unknown as QueryList<TabTitleComponent>

    this.tabContents = this.tabContents.filter(
      (item, i) => index !== i
    ) as unknown as QueryList<TabContentComponent>

    if (index === this.selectedTabIndex) {
      this.selectedTabIndex = 0
    }
  }

}
