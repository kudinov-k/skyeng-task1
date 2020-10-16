import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef, } from '@angular/core'
import { Subscription } from 'rxjs'
import { filter } from 'rxjs/operators'
import { VIEWPORT_SIZE } from './misc/viewport-size'
import { ViewportWidthService } from './viewport-width.service'


@Directive({
  selector: '[ifViewportSize]',
})
export class IfViewportSizeDirective implements OnInit, OnDestroy {
  private lastSize: VIEWPORT_SIZE
  private newSize: VIEWPORT_SIZE
  private isDisplayed = false

  private subscription: Subscription

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private viewportWidthService: ViewportWidthService) {
  }

  @Input()
  set ifViewportSize(windowSize: VIEWPORT_SIZE) {
    this.checkWindowSize(windowSize)
  }

  ngOnInit(): void {
    this.subscription = this.viewportWidthService.viewportSizeChange$.asObservable()
      .pipe(filter((size) => !!size))
      .subscribe((size) => {
        this.newSize = size
        this.checkWindowSize(this.lastSize)
      })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  private checkWindowSize(size: VIEWPORT_SIZE): void {
    if (!size) {
      return
    }

    this.lastSize = size

    if (!this.newSize) {
      return
    }

    if (size === this.newSize && !this.isDisplayed) {
      this.viewContainer.createEmbeddedView(this.templateRef)
      this.isDisplayed = true
      return
    }

    if (size !== this.newSize && this.isDisplayed) {
      this.viewContainer.clear()
      this.isDisplayed = false
    }
  }
}
