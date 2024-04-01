import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input({required: true}) duration = 0;
  @Input({required: true}) message: string = '';

  constructor(){
    //No Async (No agregar Promise o funciones asíncronas)
    //before render (antes de mostrar la página)
    console.log('constructor');
    console.log('-'.repeat(15));
  }

  ngOnChanges(changes: SimpleChanges){
    //before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(15));
    console.log(changes);
  }
}
