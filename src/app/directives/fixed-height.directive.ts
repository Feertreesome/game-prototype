import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFixedHeight]'
})
export class FixedHeightDirective {
  // @Input() footer: ElementRef;

  @HostListener('window:orientationchange')
  onOrientationChange() {
    this.setElHeight();
  }

  @HostListener('window:resize')
  onResize() {
    this.setElHeight();
  }

  constructor(private el: ElementRef) {
    this.setElHeight();
  }

  setElHeight() {
    this.el.nativeElement.style.height = `${this.getWindowHeight()}px`;
  }

  private getWindowHeight() {
    return (
      (document &&
        document.documentElement &&
        document.documentElement.clientHeight) ||
      window.innerHeight
    );
  }
}
