import { afterNextRender, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LinkProps } from './navigation-link.model';

@Component({
  selector: 'app-navigation-link',
  imports: [RouterLink],
  templateUrl: './navigation-link.html',
  styleUrl: './navigation-link.css',
})
export class NavigationLink {
  link = input.required<LinkProps>();
  childLinks = input.required<LinkProps[]>();

  constructor() {
    afterNextRender(() => {
      console.log(this.link());
    });
  }
}
