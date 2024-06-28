// import { Directive } from '@angular/core';

// @Directive({
//   selector: '[appHighlighter]',
//   standalone: true
// })
// export class HighlighterDirective {

//   constructor() { }

// }

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {
  @Input() defaultColor: string = 'yellow';
  @Input('appHighlighter') highlightColor!: string;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
