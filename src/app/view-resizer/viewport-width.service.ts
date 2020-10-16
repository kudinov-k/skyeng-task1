import { Inject, Injectable, OnDestroy } from '@angular/core'
import { BehaviorSubject, fromEvent, Subject } from 'rxjs'
import { debounceTime, distinctUntilChanged, filter, takeUntil } from 'rxjs/operators'
import { VIEWPORT_CONFIG, ViewportConfig } from './misc/viewport-config'
import { VIEWPORT_SIZE } from './misc/viewport-size'


@Injectable()
export class ViewportWidthService implements OnDestroy {
  viewportSizeChange$ = new BehaviorSubject<VIEWPORT_SIZE>(null)
  private destroySubject = new Subject()
  private sizes = new Map<VIEWPORT_SIZE, string>()

  constructor(@Inject(VIEWPORT_CONFIG) private viewportConfig: ViewportConfig) {

    this.sizes.set(VIEWPORT_SIZE.small, `(max-width:${this.viewportConfig.medium}px)`)
    this.sizes.set(VIEWPORT_SIZE.medium, `(min-width:${this.viewportConfig.medium + 1}px) and (max-width:${this.viewportConfig.large}px)`)
    this.sizes.set(VIEWPORT_SIZE.large, `(min-width:${this.viewportConfig.large}px)`)

    this.sizes.forEach((value, key) => {
        fromEvent(window.matchMedia(value), 'change')
          .pipe(
            takeUntil(this.destroySubject),
            debounceTime(200),
            distinctUntilChanged(),
            filter((event: MediaQueryListEvent) => event.matches)
          ).subscribe(() => this.changeWindow(key))
        if (window.matchMedia(value).matches) {
          this.changeWindow(key)
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.destroySubject.next()
  }

  private changeWindow(viewportSize: VIEWPORT_SIZE): void {
    this.viewportSizeChange$.next(viewportSize)
  }
}
