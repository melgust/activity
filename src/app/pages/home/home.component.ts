import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  searchValue: String = '';
  suggestedCats: any = [];
  hidden: boolean = true;

  games = [
    {
      id: 1,
      name: 'Fútbol',
      imageUrl: 'https://okdiario.com/img/2017/05/01/futbol-curiosidades-655x368.jpg',
      description: 'Mejora la salud cardiovascular y fomenta el trabajo en equipo. Fomenta la disciplina, la agilidad y la toma de decisiones rápida.',
      route: '/soccer'
    },
    {
      id: 2,
      name: 'Básquetbol',
      imageUrl: 'https://portalcomunicacion.uah.es/export/sites/portalcomunicacion/.galleries/Imagenes-Curso-2023-24/Diario-Digital/Actualidad/MADCUP-Baloncesto.jpg',
      description: 'Mejora la coordinación, la velocidad y la resistencia. Fomenta la colaboración y agudiza los reflejos. Si te interesa, favor regístrate para crear la disciplina',
      route: '/basketball'
    },
    {
      id: 2,
      name: 'Ajedrez',
      imageUrl: 'https://www.sportzcraazy.com/wp-content/uploads/2019/12/Chess-Photo.jpeg',
      description: 'Mejora la concentración, la memoria y el pensamiento estratégico. Ayuda a desarrollar la paciencia y la capacidad para resolver problemas.',
      route: '/chess'
    }
  ];

  constructor(
    private router: Router
  ) { }

  mostSearched() {
    this.router.navigate(['/most-searched']);
  }

  viewGame(game: any) {
    this.router.navigate([game.route]);
  }

}
