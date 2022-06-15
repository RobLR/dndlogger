let logs = [
  {
    logId: 1,
    name: 'Session 1',
    date: '01/01/22',
    startloc: 'Town',
    endloc: 'Dungeon',
    notes: 'Players went to the dungeon',
    images: '',
  },
  {
    logId: 2,
    name: 'Session 2',
    date: '07/01/22',
    startloc: 'Dungeon',
    endloc: 'Dungeon',
    notes: 'Players entered the dungeon and cleared the first floor',
    images: '',
  },
  {
    logId: 3,
    name: 'Session 3',
    date: '14/01/22',
    startloc: 'Dungeon',
    endloc: 'Dungeon',
    notes: 'Cleared the second floor of the dungeon',
    images: '',
  },
  {
    logId: 4,
    name: 'Session 4',
    date: '21/01/22',
    startloc: 'Dungeon',
    endloc: 'Town',
    notes: 'Travelled back to town and sold loot',
    images: '',
  },
  {
    logId: 5,
    name: 'Session 5',
    date: '28/01/22',
    startloc: 'Town',
    endloc: 'Wilderness',
    notes: 'Left town and returned to the wilderness',
    images: '',
  },
];

export function getLogs() {
  return logs;
}

export function getLog(logId) {
  return logs.find((log) => log.logId === logId);
}
