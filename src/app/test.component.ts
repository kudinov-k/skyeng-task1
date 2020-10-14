import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'test',
  template: `
    <div>
      TestComponent {{ this.tab }} content
    </div>
  `,
})
export class TestComponent implements OnInit {
  @Input() tab: number

  ngOnInit(): void {
    console.log(`>>> TestComponent ${this.tab} initialized`)
  }
}
