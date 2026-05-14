import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, OnDestroy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

type SquadCategory = 'batsman' | 'allrounder' | 'bowler';

interface PlayerStat {
  label: string;
  value: string;
}

interface SquadPlayer {
  id: string;
  name: string;
  role: string;
  category: SquadCategory;
  isWicketkeeper?: boolean;
  image: string;
  tagline: string;
  summary: string;
  stats: PlayerStat[];
}

@Component({
  selector: 'app-squad',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './squad.html'
})
export class SquadComponent implements OnDestroy {
  private readonly document = inject(DOCUMENT);

  readonly categories = [
    { id: 'batsman' as const, label: 'Batsmen', available: true },
    { id: 'allrounder' as const, label: 'All-Rounders', available: true },
    { id: 'bowler' as const, label: 'Bowlers', available: true }
  ];

  readonly categoryContent: Record<SquadCategory, { title: string; description: string }> = {
    batsman: {
      title: 'Batsmen and Wicketkeepers',
      description:
        'Select any batter to view age, IPL debut, matches, runs, strike rate, average, 50s/100s and highest score.'
    },
    allrounder: {
      title: 'All-Rounders',
      description:
        'Select any all-rounder to view age, debut year, matches, runs, wickets, economy, 50s/100s and highest score.'
    },
    bowler: {
      title: 'Bowlers',
      description:
        'Select any bowler to view age, debut year, matches, wickets, economy and best bowling figure.'
    }
  };

  readonly players: SquadPlayer[] = [
    {
      id: 'ajinkya-rahane',
      name: 'Ajinkya Rahane',
      role: 'Top-order batter',
      category: 'batsman',
      image: 'https://www.kkr.in/static-assets/images/players/3991.png?v=112.13',
      tagline: 'Captain and experienced anchor at the top.',
      summary:
        "Rahane remains KKR's senior batting organiser, with a long IPL career and more than 5000 runs in the competition.",
      stats: [
        { label: 'Age', value: '37' },
        { label: 'IPL debut', value: '2008' },
        { label: 'Matches', value: '207' },
        { label: 'Runs', value: '5237' },
        { label: 'Strike rate', value: '125.26' },
        { label: 'Average', value: '30.27' },
        { label: '50s/100s', value: '34/2' },
        { label: 'Highest score', value: '105' }
      ]
    },
    {
      id: 'rinku-singh',
      name: 'Rinku Singh',
      role: 'Middle-order finisher',
      category: 'batsman',
      image: 'https://www.kkr.in/static-assets/images/players/64727.png?v=112.13',
      tagline: 'KKR finisher with elite chasing pedigree.',
      summary:
        "Rinku's finishing value remains huge for KKR, and his career IPL record keeps growing after his breakout seasons.",
      stats: [
        { label: 'Age', value: '28' },
        { label: 'IPL debut', value: '2018' },
        { label: 'Matches', value: '67' },
        { label: 'Runs', value: '1336' },
        { label: 'Strike rate', value: '145.22' },
        { label: 'Average', value: '33.40' },
        { label: '50s/100s', value: '6/0' },
        { label: 'Highest score', value: '83' }
      ]
    },
    {
      id: 'angkrish-raghuvanshi',
      name: 'Angkrish Raghuvanshi',
      role: 'Young top-order batter',
      category: 'batsman',
      image: 'https://www.kkr.in/static-assets/images/players/88352.png?v=112.13',
      tagline: 'Emerging batter with growing responsibility.',
      summary:
        'Raghuvanshi has made a fast start in the IPL and already looks like an important young batting option for KKR.',
      stats: [
        { label: 'Age', value: '21' },
        { label: 'IPL debut', value: '2024' },
        { label: 'Matches', value: '31' },
        { label: 'Runs', value: '731' },
        { label: 'Strike rate', value: '141.95' },
        { label: 'Average', value: '30.46' },
        { label: '50s/100s', value: '5/0' },
        { label: 'Highest score', value: '59' }
      ]
    },
    {
      id: 'manish-pandey',
      name: 'Manish Pandey',
      role: 'Experienced middle-order batter',
      category: 'batsman',
      image: 'https://www.kkr.in/static-assets/images/players/4276.png?v=112.13',
      tagline: 'Veteran presence with title-winning pedigree.',
      summary:
        'Pandey remains one of the league’s most experienced Indian batters and still offers proven middle-order stability.',
      stats: [
        { label: 'Age', value: '36' },
        { label: 'IPL debut', value: '2008' },
        { label: 'Matches', value: '175' },
        { label: 'Runs', value: '3942' },
        { label: 'Strike rate', value: '121.52' },
        { label: 'Average', value: '29.42' },
        { label: '50s/100s', value: '22/1' },
        { label: 'Highest score', value: '114' }
      ]
    },
    {
      id: 'rahul-tripathi',
      name: 'Rahul Tripathi',
      role: 'Aggressive top-order batter',
      category: 'batsman',
      image: 'https://www.kkr.in/static-assets/images/players/41229.png?v=112.13',
      tagline: 'Powerplay aggressor who can change tempo quickly.',
      summary:
        "Tripathi's IPL body of work is built on intent, speed and the ability to disrupt attacks early in the innings.",
      stats: [
        { label: 'Age', value: '34' },
        { label: 'IPL debut', value: '2017' },
        { label: 'Matches', value: '100' },
        { label: 'Runs', value: '2291' },
        { label: 'Strike rate', value: '137.85' },
        { label: 'Average', value: '26.03' },
        { label: '50s/100s', value: '12/0' },
        { label: 'Highest score', value: '93' }
      ]
    },
    {
      id: 'rovman-powell',
      name: 'Rovman Powell',
      role: 'Power finisher',
      category: 'batsman',
      image: 'https://www.kkr.in/static-assets/images/players/65291.png?v=112.13',
      tagline: 'Lower-order hitter built for high-impact overs.',
      summary:
        'Powell gives KKR a strong finishing option and brings a power-hitting profile suited to late-over acceleration.',
      stats: [
        { label: 'Age', value: '32' },
        { label: 'IPL debut', value: '2022' },
        { label: 'Matches', value: '35' },
        { label: 'Runs', value: '486' },
        { label: 'Strike rate', value: '143.37' },
        { label: 'Average', value: '21.13' },
        { label: '50s/100s', value: '1/0' },
        { label: 'Highest score', value: '67' }
      ]
    },
    {
      id: 'finn-allen',
      name: 'Finn Allen',
      role: 'WK-batter',
      category: 'batsman',
      isWicketkeeper: true,
      image: 'https://www.kkr.in/static-assets/images/players/66046.png?v=112.13',
      tagline: 'Explosive opener and wicketkeeping option.',
      summary:
        'Allen has made a fast start to his IPL record and already offers KKR serious powerplay hitting upside.',
      stats: [
        { label: 'Age', value: '27' },
        { label: 'IPL debut', value: '2026' },
        { label: 'Matches', value: '6' },
        { label: 'Runs', value: '110' },
        { label: 'Strike rate', value: '200.00' },
        { label: 'Average', value: '18.33' },
        { label: '50s/100s', value: '0/0' },
        { label: 'Highest score', value: '37' }
      ]
    },
    {
      id: 'tim-seifert',
      name: 'Tim Seifert',
      role: 'WK-batter',
      category: 'batsman',
      isWicketkeeper: true,
      image: 'https://www.kkr.in/static-assets/images/players/63867.png?v=112.13',
      tagline: 'Experienced keeper-opener with 360-degree range.',
      summary:
        'Seifert offers KKR an experienced wicketkeeper-batter option with strong T20 pedigree across global leagues.',
      stats: [
        { label: 'Age', value: '31' },
        { label: 'IPL debut', value: '2021' },
        { label: 'Matches', value: '6' },
        { label: 'Runs', value: '45' },
        { label: 'Strike rate', value: '109.76' },
        { label: 'Average', value: '7.50' },
        { label: '50s/100s', value: '0/0' },
        { label: 'Highest score', value: '21' }
      ]
    },
    {
      id: 'tejasvi-singh',
      name: 'Tejasvi Singh',
      role: 'WK-batter',
      category: 'batsman',
      isWicketkeeper: true,
      image: 'https://www.kkr.in/static-assets/images/players/126180.png?v=112.13',
      tagline: 'Uncapped keeper-batter with upside.',
      summary:
        'Tejasvi is still waiting for his IPL debut and currently sits in the squad as a high-upside wicketkeeper-batter option.',
      stats: [
        { label: 'Age', value: 'N/A' },
        { label: 'IPL debut', value: '-' },
        { label: 'Matches', value: '0' },
        { label: 'Runs', value: '0' },
        { label: 'Strike rate', value: 'N/A' },
        { label: 'Average', value: 'N/A' },
        { label: '50s/100s', value: '0/0' },
        { label: 'Highest score', value: '0' }
      ]
    },
    {
      id: 'sunil-narine',
      name: 'Sunil Narine',
      role: 'All-rounder',
      category: 'allrounder',
      image: 'https://www.kkr.in/static-assets/images/players/11229.png?v=112.13',
      tagline: 'KKR legend who changes games with both bat and ball.',
      summary:
        "Narine remains the all-round heartbeat of KKR, and his live IPL record now sits beyond 200 wickets.",
      stats: [
        { label: 'Age', value: '37' },
        { label: 'Debut year', value: '2012' },
        { label: 'Matches', value: '196' },
        { label: 'Runs', value: '1820' },
        { label: 'Wickets', value: '201' },
        { label: 'Economy', value: '6.80' },
        { label: '50s/100s', value: '7/1' },
        { label: 'Highest score', value: '109' }
      ]
    },
    {
      id: 'cameron-green',
      name: 'Cameron Green',
      role: 'All-rounder',
      category: 'allrounder',
      image: 'https://www.kkr.in/static-assets/images/players/66870.png?v=112.13',
      tagline: 'Tall seam-bowling all-rounder with top-order power.',
      summary:
        'Green gives KKR premium balance with both bat and ball and has already built a strong IPL all-round record.',
      stats: [
        { label: 'Age', value: '26' },
        { label: 'Debut year', value: '2023' },
        { label: 'Matches', value: '39' },
        { label: 'Runs', value: '939' },
        { label: 'Wickets', value: '20' },
        { label: 'Economy', value: '9.48' },
        { label: '50s/100s', value: '3/1' },
        { label: 'Highest score', value: '100' }
      ]
    },
    {
      id: 'ramandeep-singh',
      name: 'Ramandeep Singh',
      role: 'All-rounder',
      category: 'allrounder',
      image: 'https://www.kkr.in/static-assets/images/players/66953.png?v=112.13',
      tagline: 'Impact utility player with finishing range and seam overs.',
      summary:
        'Ramandeep contributes finishing, fielding and occasional seam support, making him a useful balance player.',
      stats: [
        { label: 'Age', value: '29' },
        { label: 'Debut year', value: '2022' },
        { label: 'Matches', value: '38' },
        { label: 'Runs', value: '299' },
        { label: 'Wickets', value: '7' },
        { label: 'Economy', value: '10.07' },
        { label: '50s/100s', value: '0/0' },
        { label: 'Highest score', value: '35' }
      ]
    },
    {
      id: 'anukul-roy',
      name: 'Anukul Roy',
      role: 'All-rounder',
      category: 'allrounder',
      image: 'https://www.kkr.in/static-assets/images/players/66983.png?v=112.13',
      tagline: 'Left-arm spin all-rounder who adds control and depth.',
      summary:
        'Anukul adds left-arm spin control and useful lower-order batting depth for KKR in all-round combinations.',
      stats: [
        { label: 'Age', value: '27' },
        { label: 'Debut year', value: '2019' },
        { label: 'Matches', value: '20' },
        { label: 'Runs', value: '65' },
        { label: 'Wickets', value: '12' },
        { label: 'Economy', value: '8.54' },
        { label: '50s/100s', value: '0/0' },
        { label: 'Highest score', value: '29' }
      ]
    },
    {
      id: 'rachin-ravindra',
      name: 'Rachin Ravindra',
      role: 'All-rounder',
      category: 'allrounder',
      image: 'https://www.kkr.in/static-assets/images/players/66053.png?v=112.13',
      tagline: 'Top-order left-hander with left-arm spin support.',
      summary:
        'Rachin brings international quality and a growing IPL batting record, with spin available as an extra option.',
      stats: [
        { label: 'Age', value: '26' },
        { label: 'Debut year', value: '2024' },
        { label: 'Matches', value: '18' },
        { label: 'Runs', value: '413' },
        { label: 'Wickets', value: '0' },
        { label: 'Economy', value: '3.50' },
        { label: '50s/100s', value: '2/0' },
        { label: 'Highest score', value: '65' }
      ]
    },
    {
      id: 'sarthak-ranjan',
      name: 'Sarthak Ranjan',
      role: 'All-rounder',
      category: 'allrounder',
      image: 'https://www.kkr.in/static-assets/images/players/65945.png?v=112.13',
      tagline: 'Development all-round option in the wider squad mix.',
      summary:
        'Sarthak is still waiting for his IPL opportunity and currently profiles as a depth player developing inside the KKR setup.',
      stats: [
        { label: 'Age', value: '29' },
        { label: 'Debut year', value: 'Pending' },
        { label: 'Matches', value: '0' },
        { label: 'Runs', value: '0' },
        { label: 'Wickets', value: '0' },
        { label: 'Economy', value: 'N/A' },
        { label: '50s/100s', value: '0/0' },
        { label: 'Highest score', value: '0' }
      ]
    },
    {
      id: 'daksh-kamra',
      name: 'Daksh Kamra',
      role: 'All-rounder',
      category: 'allrounder',
      image: 'https://www.kkr.in/static-assets/images/players/137799.png?v=112.13',
      tagline: 'Young spin-bowling project with long-term upside.',
      summary:
        'Daksh is still uncapped in the IPL and remains a developmental all-round prospect in the KKR squad.',
      stats: [
        { label: 'Age', value: '23' },
        { label: 'Debut year', value: 'Pending' },
        { label: 'Matches', value: '0' },
        { label: 'Runs', value: '0' },
        { label: 'Wickets', value: '0' },
        { label: 'Economy', value: 'N/A' },
        { label: '50s/100s', value: '0/0' },
        { label: 'Highest score', value: '0' }
      ]
    },
    {
      id: 'varun-chakravarthy',
      name: 'Varun Chakravarthy',
      role: 'Bowler',
      category: 'bowler',
      image: 'https://www.kkr.in/static-assets/images/players/67469.png?v=112.13',
      tagline: "Mystery spinner and one of KKR's main wicket-takers.",
      summary:
        "Varun remains central to KKR's spin attack, and his current IPL record has now crossed the 100-wicket mark.",
      stats: [
        { label: 'Age', value: '34' },
        { label: 'Debut', value: '2019' },
        { label: 'Matches', value: '88' },
        { label: 'Wickets', value: '105' },
        { label: 'Economy', value: '7.65' },
        { label: 'Best bowling figure', value: '5/20' }
      ]
    },
    {
      id: 'harshit-rana',
      name: 'Harshit Rana',
      role: 'Bowler',
      category: 'bowler',
      image: 'https://www.kkr.in/static-assets/images/players/93526.png?v=112.13',
      tagline: 'Fast bowler trusted in difficult overs.',
      summary:
        'Harshit has quickly become a major pace option for KKR, especially in the toughest overs of an innings.',
      stats: [
        { label: 'Age', value: '24' },
        { label: 'Debut', value: '2022' },
        { label: 'Matches', value: '33' },
        { label: 'Wickets', value: '40' },
        { label: 'Economy', value: '9.51' },
        { label: 'Best bowling figure', value: '3/24' }
      ]
    },
    {
      id: 'matheesha-pathirana',
      name: 'Matheesha Pathirana',
      role: 'Bowler',
      category: 'bowler',
      image: 'https://www.kkr.in/static-assets/images/players/73830.png?v=112.13',
      tagline: 'Slinging death-over specialist with wicket-taking edge.',
      summary:
        'Pathirana brings a unique release point and one of the stronger death-bowling wicket records in the league.',
      stats: [
        { label: 'Age', value: '23' },
        { label: 'Debut', value: '2022' },
        { label: 'Matches', value: '32' },
        { label: 'Wickets', value: '47' },
        { label: 'Economy', value: '8.68' },
        { label: 'Best bowling figure', value: '4/28' }
      ]
    },
    {
      id: 'umran-malik',
      name: 'Umran Malik',
      role: 'Bowler',
      category: 'bowler',
      image: 'https://www.kkr.in/static-assets/images/players/82969.png?v=112.13',
      tagline: 'Raw pace option capable of unsettling batters quickly.',
      summary:
        'Umran offers genuine pace and a wicket-taking ceiling few bowlers can match when rhythm and control align.',
      stats: [
        { label: 'Age', value: '26' },
        { label: 'Debut', value: '2021' },
        { label: 'Matches', value: '26' },
        { label: 'Wickets', value: '29' },
        { label: 'Economy', value: '9.40' },
        { label: 'Best bowling figure', value: '5/25' }
      ]
    },
    {
      id: 'vaibhav-arora',
      name: 'Vaibhav Arora',
      role: 'Bowler',
      category: 'bowler',
      image: 'https://www.kkr.in/static-assets/images/players/74298.png?v=112.13',
      tagline: 'New-ball seamer who swings it early.',
      summary:
        'Vaibhav has grown into a reliable powerplay wicket-taking option with early movement and disciplined lengths.',
      stats: [
        { label: 'Age', value: '28' },
        { label: 'Debut', value: '2022' },
        { label: 'Matches', value: '41' },
        { label: 'Wickets', value: '46' },
        { label: 'Economy', value: '9.68' },
        { label: 'Best bowling figure', value: '3/27' }
      ]
    },
    {
      id: 'kartik-tyagi',
      name: 'Kartik Tyagi',
      role: 'Bowler',
      category: 'bowler',
      image: 'https://www.kkr.in/static-assets/images/players/67735.png?v=112.13',
      tagline: 'Indian quick with yorkers and death-over experience.',
      summary:
        'Tyagi adds pace depth and has already shown he can execute under pressure in IPL death-over situations.',
      stats: [
        { label: 'Age', value: '25' },
        { label: 'Debut', value: '2020' },
        { label: 'Matches', value: '29' },
        { label: 'Wickets', value: '26' },
        { label: 'Economy', value: '9.90' },
        { label: 'Best bowling figure', value: '3/22' }
      ]
    },
    {
      id: 'prashant-solanki',
      name: 'Prashant Solanki',
      role: 'Bowler',
      category: 'bowler',
      image: 'https://www.kkr.in/static-assets/images/players/72042.png?v=112.13',
      tagline: 'Leg-spinner who offers control in the middle overs.',
      summary:
        'Solanki remains lightly tested in IPL cricket but gives the squad another middle-overs spin option.',
      stats: [
        { label: 'Age', value: '26' },
        { label: 'Debut', value: '2022' },
        { label: 'Matches', value: '2' },
        { label: 'Wickets', value: '2' },
        { label: 'Economy', value: '6.33' },
        { label: 'Best bowling figure', value: '2/20' }
      ]
    },
    {
      id: 'blessing-muzarabani',
      name: 'Blessing Muzarabani',
      role: 'Bowler',
      category: 'bowler',
      image: 'https://www.kkr.in/static-assets/images/players/67784.png?v=112.13',
      tagline: 'Tall quick who creates bounce and awkward angles.',
      summary:
        'Blessing gives KKR extra height and bounce, and he has already opened his IPL wicket tally.',
      stats: [
        { label: 'Age', value: '29' },
        { label: 'Debut', value: '2026' },
        { label: 'Matches', value: '2' },
        { label: 'Wickets', value: '4' },
        { label: 'Economy', value: '10.71' },
        { label: 'Best bowling figure', value: '4/41' }
      ]
    },
    {
      id: 'saurabh-dubey',
      name: 'Saurabh Dubey',
      role: 'Bowler',
      category: 'bowler',
      image: 'https://www.kkr.in/static-assets/images/players/74123.png?v=112.13',
      tagline: 'Left-arm seamer who adds variation to the pace group.',
      summary:
        "Dubey is still waiting for his first IPL appearance and remains part of KKR's developing seam depth.",
      stats: [
        { label: 'Age', value: '28' },
        { label: 'Debut', value: 'Pending' },
        { label: 'Matches', value: '0' },
        { label: 'Wickets', value: '0' },
        { label: 'Economy', value: 'N/A' },
        { label: 'Best bowling figure', value: 'N/A' }
      ]
    }
  ];

  activeCategory: SquadCategory = 'batsman';
  selectedPlayerId = '';

  get activePlayers(): SquadPlayer[] {
    return this.players.filter((player) => player.category === this.activeCategory);
  }

  get selectedPlayer(): SquadPlayer | undefined {
    return this.players.find((player) => player.id === this.selectedPlayerId);
  }

  get activeCategoryContent(): { title: string; description: string } {
    return this.categoryContent[this.activeCategory];
  }

  get isModalOpen(): boolean {
    return this.selectedPlayerId !== '';
  }

  setCategory(category: SquadCategory, available: boolean): void {
    if (!available) {
      return;
    }

    this.activeCategory = category;
    this.closePlayer();
  }

  openPlayer(playerId: string): void {
    if (this.isModalOpen) {
      return;
    }

    this.selectedPlayerId = playerId;
    this.document.body.style.overflow = 'hidden';
  }

  closePlayer(): void {
    this.selectedPlayerId = '';
    this.document.body.style.overflow = '';
  }

  ngOnDestroy(): void {
    this.document.body.style.overflow = '';
  }

  trackPlayer(_: number, player: SquadPlayer): string {
    return player.id;
  }

  private createPlayerPoster(name: string, accent: string, wicketkeeper = false): string {
    const initials = name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 3)
      .toUpperCase();
    const badge = wicketkeeper ? 'WK' : 'BAT';
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 420">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#2a124f" />
            <stop offset="100%" stop-color="#4d2488" />
          </linearGradient>
        </defs>
        <rect width="360" height="420" rx="36" fill="url(#bg)" />
        <circle cx="180" cy="132" r="74" fill="${accent}" opacity="0.95" />
        <path d="M100 320c16-54 52-82 80-82s64 28 80 82" fill="${accent}" opacity="0.95" />
        <circle cx="180" cy="126" r="34" fill="#2a124f" opacity="0.16" />
        <text x="180" y="150" text-anchor="middle" font-size="38" font-family="Arial, sans-serif" font-weight="700" fill="#2a124f">${initials}</text>
        <rect x="36" y="34" width="88" height="34" rx="17" fill="${accent}" />
        <text x="80" y="57" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" font-weight="700" fill="#2a124f">${badge}</text>
        <text x="180" y="368" text-anchor="middle" font-size="22" font-family="Arial, sans-serif" font-weight="700" fill="#ffd54f">${name}</text>
      </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }
}
