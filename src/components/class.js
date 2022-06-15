let logs;

class Log {
	constructor(id, name, date, startloc, endloc, notes, images) {
		this.logId = id;
		this.name = name;
		this.date = date;
		this.startloc = startloc;
		this.endloc = endloc;
		this.notes = notes;
		this.images = images;
	}
}

export function addLog(id, name, date, startloc, endloc, notes, images) {
	let newLog = new Log(id, name, date, startloc, endloc, notes, images);
	logs.push(newLog);
}

export function getLogs() {
	return logs;
}

export function getLog(logId) {
	return logs.find((log) => log.logId === logId);
}
