import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuItem } from 'src/app/model/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})

export class MenuComponent {
  constructor(private _sanitizer: DomSanitizer) {}

  @Output() offsetMenuEvent: EventEmitter<boolean> = new EventEmitter();
  @Input() offsetMenu = false;

  onMenu(val: boolean) {
    this.offsetMenuEvent.emit(val);
  }

  sideMenu: MenuItem[] = [
    {
      label: 'Inicio',
      url: '',
      icon: `<svg class="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>`,
      title: 'Página inicial'
    },
    {
      label: 'Actividades',
      url: '/activity-list',
      icon: `<svg class="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>`,
      title: 'Listar todas las actividades'
    },
    {
      label: 'Fútbol',
      url: '/soccer',
      icon: `<svg class="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8.5 6.5L12 10l3.5-3.5M12 10v4M8.5 17.5L12 14l3.5 3.5"/>
        <path d="M6.5 8.5L10 12l-3.5 3.5M14 12l3.5-3.5L14 12l3.5 3.5"/>
      </svg>`,
      title: 'Fútbol'
    },
    {
      label: 'Baloncesto',
      url: '/basketball',
      icon: `<svg class="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>`,
      title: 'Baloncesto'
    },
    {
      label: 'Ajedrez',
      url: '/chess',
      icon: `<svg class="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M27.78,16.0353a6.3866,6.3866,0,1,0-7.559,0"/>
        <path d="M27.7791,16.0348,32.31,19.0181a8.4613,8.4613,0,0,1-.7678,2.6175H16.4579a8.4613,8.4613,0,0,1-.7678-2.6175l4.5308-2.9833"/>
        <path d="M27.5287,21.6356c0,9.0738,9.3879,10.4,9.3879,19.1946-1.745,2.19-7.93,2.67-12.9166,2.67s-11.1716-.4794-12.9166-2.67c0-8.7946,9.3879-10.1208,9.3879-19.1946"/>
      </svg>`,
      title: 'Ajedrez'
    }
  ];

  getSVGImage(image: any) {
    return this._sanitizer.bypassSecurityTrustHtml(`${image}`);
  }
}
