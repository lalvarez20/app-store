import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';

import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {

  //Con ! al final de la variable indicamos que no
  //alerte sobre la inicialización
  @Input({required: true}) audioUrl!: string;
  @ViewChild('wavesound') divContainer!: ElementRef;

  //Referencia al 
  private ws!: WaveSurfer;

  isPlaying = signal(false);

  ngAfterViewInit(){
    this.ws = WaveSurfer.create({
      url: this.audioUrl,
      container: this.divContainer.nativeElement
    });
    this.ws.on('play', ()=> this.isPlaying.set(true));
    this.ws.on('pause', ()=> this.isPlaying.set(false));
  }

  playPause(){
    this.ws.playPause();
  }
}
