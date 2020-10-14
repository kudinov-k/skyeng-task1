import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabs = [1, 2]

  dec(): void {
    this.tabs = this.tabs.slice(0, -1)
  }

  inc(): void {
    this.tabs = [...this.tabs, (this.tabs.length + 1)]
  }
}
