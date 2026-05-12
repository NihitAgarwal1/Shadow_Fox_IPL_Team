import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-squad',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './squad.html'
})
export class SquadComponent {
  players = [
    // Batters
    { name: 'Ajinkya Rahane', role: 'Batter' },
    { name: 'Rinku Singh', role: 'Batter' },
    { name: 'Angkrish Raghuvanshi', role: 'Batter' },
    { name: 'Manish Pandey', role: 'Batter' },
    { name: 'Rahul Tripathi', role: 'Batter' },
    { name: 'Rovman Powell', role: 'Batter' },
    { name: 'Finn Allen', role: 'Batter' },
    { name: 'Tejasvi Singh', role: 'Batter' },
    { name: 'Tim Seifert', role: 'Batter' },
    // All-rounders
    { name: 'Sunil Narine', role: 'All-rounder' },
    { name: 'Cameron Green', role: 'All-rounder' },
    { name: 'Ramandeep Singh', role: 'All-rounder' },
    { name: 'Anukul Roy', role: 'All-rounder' },
    { name: 'Rachin Ravindra', role: 'All-rounder' },
    { name: 'Sarthak Ranjan', role: 'All-rounder' },
    { name: 'Daksh Kamra', role: 'All-rounder' },
    // Bowlers
    { name: 'Varun Chakaravarthy', role: 'Bowler' },
    { name: 'Harshit Rana', role: 'Bowler' },
    { name: 'Matheesha Pathirana', role: 'Bowler' },
    { name: 'Umran Malik', role: 'Bowler' },
    { name: 'Vaibhav Arora', role: 'Bowler' },
    { name: 'Kartik Tyagi', role: 'Bowler' },
    { name: 'Akash Deep', role: 'Bowler' },
    { name: 'Prashant Solanki', role: 'Bowler' },
    { name: 'Blessing Muzarabani', role: 'Bowler' },
    { name: 'Saurabh Dubey', role: 'Bowler' }
  ];

  getStatsUrl(name: string): string {
    return `https://www.google.com/search?q=${encodeURIComponent(name)}+IPL+stats+performance`;
  }
}
