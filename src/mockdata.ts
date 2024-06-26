import { v4 as uuidv4 } from 'uuid';

const isAlive = () => Math.random() < 0.5 ? 'alive' : 'dead'
const score = () => Math.floor(Math.random() * 101)
const kills = () => Math.floor(Math.random() * 51)
const deaths = () => Math.floor(Math.random() * 31)

export enum ETeamStatus {
	WIN = 'Winners',
	LOOSE = 'Loosers',
}

export const firstTeam = {
	name: "Blue team",
	status: ETeamStatus.WIN,
	players: Array.from({length: 50}, (_, index) => ({
		id: uuidv4(),
		nickname: `CasualPlayer${index + 1}`,
		isAlive: isAlive(),
		score: score(),
		kills: kills(),
		deaths: deaths(),
	})).sort((a, b) => b.score - a.score),
};

export const secondTeam = {
	name: "Red team",
	status: ETeamStatus.LOOSE,
	players: Array.from({length: 50}, (_, index) => ({
		id: uuidv4(),
		nickname: `GoodPlayer${index + 1}`,
		isAlive: isAlive(),
		score: score(),
		kills: kills(),
		deaths: deaths(),
	})).sort((a, b) => b.score - a.score),
};