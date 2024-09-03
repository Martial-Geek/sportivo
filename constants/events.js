const events = [
  {
    id: "gully-cricket",
    name: "Gully Cricket",
    imageSrc: "/assets/gully_Cricket.gif",
    formLink: "https://forms.gle/kDHKcjEfRuHFBb3Y6",
    description: [
      "GULLY CRICKET:\n",
      "1) Each match will be played on a knockout basis\n",
      "2) Number of players per team: 9+2\n",
      "3) The umpire's decision will be final\n",
      "4) If a player/team fails to report on the ground on time, the opponent will be given a walkover\n",
      "5) The coordinator has the right to modify rules as per necessity",
    ],
    registerFunction: "cricket()",
  },
  {
    id: "futsal",
    name: "Futsal",
    imageSrc: "/assets/futsalgif.gif",
    formLink: "https://forms.gle/otVn8hV1vc2BDK5W9",
    description: [
      "FUTSAL:\n",
      "1) Each match will be played on a knockout basis\n",
      "2) Number of players per team: 5+3\n",
      "3) The referee's decision will be final\n",
      "4) If a player/team fails to report on the ground on time, the opponent will be given a walkover\n",
      "5) The coordinator has the right to modify rules as per necessity",
    ],
    registerFunction: "football()",
  },
  {
    id: "chess",
    name: "Chess",
    imageSrc: "/assets/chess.gif",
    formLink: "https://forms.gle/hmuhHgZJTDHemGK56",
    description: `CHESS:
    The tournament has an entry fee of Rs.700 and entries must be submitted online through a Google form by May 9th, 2024. Each player is eligible for one prize only and prizes will not be shared. Lunch will be provided on May 12th, 2024. The tournament consists of a maximum of 7 rounds with a time control of 25 minutes + 3 seconds increment per player. The first round starts at 1:30 PM on May 11th, 2024, with 3 rounds played on the first day and 4 rounds on the second day. The inauguration is at 1:00 PM on May 11th and the prize distribution is at 5:30 PM on May 12th. E-certificates will be provided to all participants.
    
    Participants must provide a valid Aadhaar card or birth certificate for age proof. The tournament will follow the latest FIDE rules and players must arrive at the chess board 15 minutes earlier. Any disputes against the Chief Arbiter’s decision must be protested in writing with a fee of Rs 500/- within 10 minutes of the incident. A three-member appeals committee will be formed before the tournament starts. Absence during any round without written notice will be treated as withdrawal. All participants must have SBDS Registration for the year 2024. Outstation players must arrange their own accommodation. Players can choose to play in the Open category, but requests for group change will not be entertained.`,
    registerFunction: "chess()",
  },
  {
    id: "kabaddi",
    name: "Kabaddi",
    imageSrc: "/assets/kabaddi.gif",
    formLink: "https://forms.gle/Li1MadURTcmh3PoZA",
    description: `KABADDI:\n
Each match will be played on a knockout basis\n
Number of players per team: 7+3\n
The referee's decision will be final\n
If a player/team fails to report on the ground on time, the opponent will be given a walkover\n
The match officials and coordinators have the right to disqualify a team if not maintained proper decorum of the sports or intentionally try to hurt other players.\n
Rules can be modified by the coordinator if required`,
    registerFunction: "volleyball()",
  },
  {
    id: "badminton",
    name: "Badminton",
    imageSrc: "/assets/badminton.gif",
    formLink: "https://forms.gle/awgwrwuCFNXfF7tC8",
    description: [
      "BADMINTON:\n",
      "1) Qualifiers will be played for 15 points(1 set)\n",
      "2)The decision of the coordinator will be final\n",
      "3) If a player/team fails to report on the ground on time, the opponent will be given a walkover\n",
      "4) The coordinator has the right to modify rules as per necessity",
    ],
    registerFunction: "badminton()",
  },
  {
    id: "table-tennis",
    name: "Table Tennis",
    imageSrc: "/assets/table tennis.gif",
    formLink: "https://forms.gle/9RyeXFQRdQJ9zwmF8",
    description: [
      "TABLE TENNIS:\n",
      "1) Each match will be played on a knockout basis\n",
      "2) Qualifiers will be played for 11 points(3 sets)\n",
      "3) The decision of the coordinator will be final\n",
      "4) If a player/team fails to report on the ground on time, the opponent will be given a walkover\n",
      "5) The coordinator has the right to modify rules as per necessity",
    ],

    registerFunction: "tabletennis()",
  },
];

export default events;
