import { Component, effect, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    MatButtonModule,
    MatDivider,
    MatIcon,
    MatCheckbox,
    MatFormField,
    MatSelectModule,
    MatLabel,
    MatOption,
  ],
})
export class AppComponent {
  darkTheme = signal(false);

  DENSITY_LEVELS = ['maximum', 0, '-1', '-2', '-3', '-4', 'minimum'];

  density = signal(1);

  constructor() {
    effect(() => {
      document.body.classList.toggle('dark', this.darkTheme());
    });

    effect(() => {
      // remove density-* classes
      document.body.classList.forEach((className) => {
        if (className.startsWith('density-')) {
          document.body.classList.remove(className);
        }
      });

      // add density-* class
      document.body.classList.add(`density-${this.density()}`);
    });
  }
}
