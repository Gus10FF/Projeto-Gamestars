import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-inicio-component',
  standalone: false,
  templateUrl: './tela-inicio-component.html',
  styleUrls: ['./tela-inicio-component.css'],
})
export class TelaInicioComponent {
  meusJogos = [
    { id: 1, nome: 'Ultrakill', ano: 2019, nota: 4.9, imagem: 'jogos/Ultrakill.jpeg' },
    { id: 2, nome: 'Enter The Gungeon', ano: 2016, nota: 4.8, imagem: 'jogos/Enter the Gungeon.jpeg' },
    { id: 3, nome: 'Iron Lung', ano: 2022, nota: 4.7, imagem: 'jogos/Iron Lung.jpeg', },
    { id: 4, nome: 'DeltaRune', ano: 2018, nota: 4.9, imagem: 'jogos/Deltarune.jpeg',},
    { id: 5, nome: 'Mullet Madjack', ano: 2024, nota: 4.9, imagem: 'jogos/Mullet Madjack.jpeg',},
    { id: 6, nome: 'Dust: An Elysian Tail', ano: 2012, nota: 4.5, imagem: 'jogos/Dust.jpeg',},
    { id: 7, nome: 'Uktena 64', ano: 2025, nota: 4.5, imagem: 'jogos/Uktena 64.jpeg',},
    { id: 8, nome: 'Hotline Miami', ano: 2012, nota: 4.7, imagem: 'jogos/HM.jpeg' }
  ];

  jogosPopulares = [
    { id: 9, nome: 'DeltaRune', ano: 2018, nota: 4.9, imagem: 'jogos/Deltarune.jpeg',},
    { id: 10, nome: 'Balatro', ano: 2024, nota: 4.2, imagem: 'jogos/balatro.jpeg' },
    { id: 11, nome: 'BALL X PIT', ano: 2025, nota: 4.5, imagem: 'jogos/Ball x pit.jpeg' }
  ];
}
