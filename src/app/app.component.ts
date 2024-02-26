import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModelInputComponent } from './model-input/model-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModelInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-model-inputs';
  name = 'Mariam Gasparyan';
  nameSignal = signal('Mariam Gasparyan');
}
