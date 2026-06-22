import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-inicio-component',
  standalone: false,
  templateUrl: './tela-inicio-component.html',
  styleUrl: './tela-inicio-component.css',
})
export class TelaInicioComponent {
  meusJogos = [
    { nome: 'Ultrakill', ano: 2019, nota: '4.9', imagem: 'jogos/Ultrakill.jpeg' },
    { nome: 'Enter The Gungeon', ano: 2016, nota: '4.8', imagem: 'jogos/Enter the Gungeon.jpeg' },
    { nome: 'Iron Lung', ano: 2022, nota: '4.7', imagem: 'jogos/Iron Lung.jpeg', },
    { nome: 'DeltaRune', ano: 2018, nota: '4.9', imagem: 'jogos/Deltarune.jpeg',},
    { nome: 'Mullet Madjack', ano: 2024, nota: '4.9', imagem: 'jogos/Mullet Madjack.jpeg',},
    { nome: 'Dust: An Elysian Tail', ano: 2012, nota: '4.5', imagem: 'jogos/Dust.jpeg',}
  ];

  jogosPopulares = [
    { nome: 'DeltaRune', ano: 2018, nota: '4.9', imagem: 'jogos/Deltarune.jpeg',},
    { nome: 'Balatro', ano: 2024, nota: '4.2', imagem: 'jogos/balatro.jpeg' }
  ];
}
