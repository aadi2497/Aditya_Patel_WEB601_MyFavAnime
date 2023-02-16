import { ContentChildren, Directive, ElementRef, HostBinding, HostListener, Input, QueryList } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {


@Input() hoverAffect: string;
  @HostBinding('style.textDecoration') textDecoration: string;
  @HostBinding('style.fontWeight') fontWeight: string;
  @HostBinding('style.border') border: string;

  @HostListener('mouseenter') onMouseEnter() {
    if (this.hoverAffect === 'type') {
      this.textDecoration = 'underline';
    } else if (this.hoverAffect === 'tag') {
      this.fontWeight = 'bold';
      this.border = '6px solid blue';
    } else if (this.hoverAffect === 'card') {
      this.border = '2px solid blue';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.hoverAffect === 'type') {
      this.textDecoration = 'none';
    } else if (this.hoverAffect === 'tag') {
      this.fontWeight = 'normal';
      this.border = 'none';
    } else if (this.hoverAffect === 'card') {
      this.border = 'none';
    }
  }
}

