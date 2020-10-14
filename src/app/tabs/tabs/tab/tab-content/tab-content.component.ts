import { Component, TemplateRef, ViewChild } from '@angular/core'

@Component({
  selector: 'tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent {
  @ViewChild('innerTemplate') innerTemplate: TemplateRef<any>
}
