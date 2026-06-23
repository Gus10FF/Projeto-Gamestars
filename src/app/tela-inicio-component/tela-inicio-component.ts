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
    { id: 8, nome: 'Hotline Miami', ano: 2012, nota: 4.7, imagem: 'jogos/HM.jpeg' },
    { id: 9, nome: 'Gravity Circuit', ano: 2023, nota: 4.6, imagem: 'jogos/Gravity Circuit.jpg' },
    { id: 10, nome: 'Balatro', ano: 2024, nota: 4.2, imagem: 'jogos/balatro.jpeg' },
    { id: 11, nome: 'BALL X PIT', ano: 2025, nota: 4.5, imagem: 'jogos/Ball x pit.jpeg' },
    { id: 12, nome: 'Lost in Vivo', ano: 2018, nota: 4.1, imagem: 'jogos/Lost in Vivo.jpeg' },
    { id: 13, nome: 'Super Galaxy Squadron EX Turbo', ano: 2015, nota: 3.7, imagem: 'jogos/Super Galaxy.jpeg' },
    { id: 14, nome: 'Mycopunk', ano: 2025, nota: 4.7, imagem: 'jogos/Mycopunk.jpeg' },
    { id: 15, nome: 'Noita', ano: 2020, nota: 4.5, imagem: 'jogos/Noita_.jpg' },
    { id: 16, nome: 'Amid Evil', ano: 2018, nota: 3.9, imagem: 'jogos/Amid Evil.jpeg' },
    { id: 17, nome: 'A Wolf in Antumn', ano: 2025, nota: 3.6, imagem: 'jogos/A Wolf in Antumn.jpeg' },
    { id: 18, nome: 'Chop Goblins', ano: 2022, nota: 4.8, imagem: 'jogos/Chop Goblins.jpeg' },
    { id: 19, nome: 'Cult of the Lamb', ano: 2022, nota: 4.5, imagem: 'jogos/Cult of The Lamb.jpeg' },
    { id: 20, nome: 'Your Only Move is HUSTLE', ano: 2022, nota: 4.8, imagem: 'jogos/Yomi.jpeg' },
    { id: 21, nome: 'My Friend Pedro', ano: 2019, nota: 4.2, imagem: 'jogos/My Friend Pedro.png' },
    { id: 22, nome: 'Lunacid', ano: 2023, nota: 4.7, imagem: 'jogos/Lunacid.jpeg' },
    { id: 23, nome: 'Celeste', ano: 2018, nota: 4.6, imagem: 'jogos/Celeste.png' },
    { id: 24, nome: 'Animal Well', ano: 2024, nota: 4.9, imagem: 'jogos/Animal Well.jpeg' },
    { id: 25, nome: 'AntonBlast', ano: 2024, nota: 4.9, imagem: 'jogos/AntonBlast.jpeg' },
    { id: 26, nome: 'Buckshot Roulette', ano: 2023, nota: 4.3, imagem: 'jogos/BuckShot.png' },
    { id: 27, nome: '9 Kings', ano: 2024, nota: 4.8, imagem: 'jogos/9Kings.jpg' },
    { id: 28, nome: 'Arsonate', ano: 2026, nota: 4.5, imagem: 'jogos/Arsonate.png' },
    { id: 29, nome: 'Exit The Gungeon', ano: 2019, nota: 4.4, imagem: 'jogos/Exit the Gungeon.jpeg' },
    { id: 30, nome: 'The Pony Factory', ano: 2024, nota: 3.9, imagem: 'jogos/Pony Factory.jpeg' },
    { id: 31, nome: 'Deaths Door', ano: 2021, nota: 4.3, imagem: 'jogos/Deaths Door.jpeg' },
    { id: 32, nome: 'Hotline Miami 2', ano: 2015, nota: 4.3, imagem: 'jogos/HM 2.jpeg' },
    { id: 33, nome: 'Fight Knight', ano: 2021, nota: 4.6, imagem: 'jogos/Fight Knight.png' },
    { id: 34, nome: 'Dusk', ano: 2018, nota: 4.9, imagem: 'jogos/Dusk.jpg' },
    { id: 35, nome: 'Faith', ano: 2017, nota: 4.0, imagem: 'jogos/Faith.jpeg' },
    { id: 36, nome: 'Gloomwood', ano: 2022, nota: 4.9, imagem: 'jogos/Gloomwood.jpeg' },
    { id: 37, nome: 'Inscryption', ano: 2021, nota: 4.7, imagem: 'jogos/Inscriptyon.jpeg' },
    { id: 38, nome: 'Spooky Jump Scare Mansion', ano: 2014, nota: 4.7, imagem: 'jogos/Spooky Mansion.jpeg' },
    { id: 39, nome: 'Griss', ano: 2018, nota: 4.6, imagem: 'jogos/Griss.jpeg' },
    { id: 40, nome: 'Secret Aagent Wizard Boy and the International Crime Syndicate', ano: 2025, nota: 4.1, imagem: 'jogos/Wizard Agent.jpeg' },
    { id: 41, nome: 'Undertale', ano: 2015, nota: 4.4, imagem: 'jogos/Undertale.jpeg',},
    { id: 42, nome: 'Pseudoregalia', ano: 2023, nota: 4.8, imagem: 'jogos/Pseudoregalia.png' },
    { id: 43, nome: 'Squirrel Stapler', ano: 2023, nota: 4.1, imagem: 'jogos/Squirrel Stapler.jpeg',}
  ];

  jogosPopulares = [
    { id: 44, nome: 'DeltaRune', ano: 2018, nota: 4.9, imagem: 'jogos/Deltarune.jpeg',},
    { id: 45, nome: 'Balatro', ano: 2024, nota: 4.2, imagem: 'jogos/balatro.jpeg' },
    { id: 46, nome: 'BALL X PIT', ano: 2025, nota: 4.5, imagem: 'jogos/Ball x pit.jpeg' },
    { id: 47, nome: 'Iron Lung', ano: 2022, nota: 4.7, imagem: 'jogos/Iron Lung.jpeg', },
    { id: 48, nome: '9 Kings', ano: 2024, nota: 4.8, imagem: 'jogos/9Kings.jpg' },
    { id: 49, nome: 'Gravity Circuit', ano: 2023, nota: 4.6, imagem: 'jogos/Gravity Circuit.jpg' },
    { id: 50, nome: 'Hotline Miami 2', ano: 2015, nota: 4.3, imagem: 'jogos/HM 2.jpeg' },
    { id: 51, nome: 'Arsonate', ano: 2026, nota: 4.5, imagem: 'jogos/Arsonate.png' },
    { id: 52, nome: 'Ultrakill', ano: 2019, nota: 4.9, imagem: 'jogos/Ultrakill.jpeg' },
    { id: 53, nome: 'Your Only Move is HUSTLE', ano: 2022, nota: 4.8, imagem: 'jogos/Yomi.jpeg' }
  ];
}
