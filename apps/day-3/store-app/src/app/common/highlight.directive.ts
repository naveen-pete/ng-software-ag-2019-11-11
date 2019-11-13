import { Directive, OnInit, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() bgColor = 'yellow';

  constructor(private el: ElementRef) { }

  ngOnInit() {
    // this.el.nativeElement.style.backgroundColor = this.bgColor;
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.setBgColor(this.bgColor);
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.setBgColor('');
  }

  private setBgColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
