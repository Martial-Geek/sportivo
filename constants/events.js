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
    description: [
      "CHESS TOURNAMENT:\n",
      "General Information:\n",
      "Entry Fee: Rs. 150\n",
      "Entries: Online through the mentioned Google form\n",
      "Last Date of Entry: September 18th, 2024\n",
      "Time Control: 30 minutes per player\n",
      "First Round: 10:00 AM on September 22nd, 2024\n",
      "E-Certificates: Provided to all participants\n",
      "Rules & Regulations:\n",
      "System of Play: The tournament will be played under the latest FIDE Rules.\n",
      "Default Time: Players must arrive at the chess board 15 minutes earlier.\n",
      "Illegal Moves: First Illegal Warning, Second Illegal Loss.\n",
      "Touch-Move: A player who has the move and touches a piece/pawn on the board must move it, if it’s legal to do so.\n",
      "Protests: Chief Arbiter's decision is final and binding.\n",
      "Withdrawal: Absence during any round without written notice will be treated as withdrawal.\n",
    ],
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
