import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-model-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './model-input.component.html',
  styleUrl: './model-input.component.scss',
})
export class ModelInputComponent {
  value = model('');
}
