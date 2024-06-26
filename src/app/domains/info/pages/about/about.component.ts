import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterComponent } from '@shared/components/counter/counter.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { HighlightDirective } from '@shared/directives/highlight.directive';
import { WaveAudioComponent } from '@info/components/wave-audio/wave-audio.component';

import { ReversePipe } from '@shared/pipes/reverse.pipe'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CounterComponent, WaveAudioComponent, ReversePipe, HighlightDirective, HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {

  duration = signal(100);
  message = signal('Hola Counter');

  changeDuration(event: Event){
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }

  changeMessage(event: Event){
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }
}
