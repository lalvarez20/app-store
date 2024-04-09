import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {

  // Se injecta la dependecia de la referencia del DOM
  viewElment = inject(ElementRef);

  constructor() { }

  ngOnInit(){
    this.viewElment.nativeElement.style.backgroundColor = "yellow";
  }

}
