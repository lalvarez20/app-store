import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input({required: true}) duration = 0;
  @Input({required: true}) message: string = '';

  counter = signal(0);
  counterRef: number | undefined;

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

    const duration = changes['duration'];
    console.log(duration);
    if(duration){
      this.doSomething();
    }
  }

  ngOnInit(){
    //after render
    // Solo se ejecuta 1 vez
    // Se puede ejecutar funcione async (promise, then, subcribe)
    console.log('ngOnInit');
    console.log('-'.repeat(15));
    console.log('duration => '+this.duration);
    console.log('message => '+this.message);

    this.counterRef = window.setInterval(() => {
      //console.log('run interval...');
      this.counter.update(prevState => prevState +1);
    }, 1000)
  }

  ngAfterViewInit(){
    //after render
    // Solo se ejecuta 1 vez Luego renderizar los hijos del componente
    console.log('ngAfterViewInit');
    console.log('-'.repeat(15));
  }

  ngOnDestroy(){
    //Al eliminar el componente
    console.log('ngOnDestroy');
    console.log('-'.repeat(15));
    window.clearInterval(this.counterRef);
  }

  doSomething(){
    console.log('cambió duration');
  }
}
