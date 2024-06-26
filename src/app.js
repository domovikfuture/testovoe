import React from 'react';
import ListRender from "./ListRender";
import {firstTeam, secondTeam} from "./mockdata.ts";
import "./app.css"

function App() {
	const [tooltipData, setTooltipData] = React.useState(null);

	const onMouseOver = (e) => {
		const [team, index] = e.target.id.split(",")
		if (!team && !index) {
			return
		}

		setTooltipData(() => {
			const players = team === "1" ? firstTeam.players : secondTeam.players;
			return {
				team, idx: index, kills: players[index].kills, deaths: players[index].deaths
			}
		})
	}

	const onMouseLeave = () => {
		setTooltipData(null)
	}

	return (
		<div className="wrapper">
			<h1>Match results</h1>
			<div className="row" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
				<ListRender team={firstTeam} tooltipData={tooltipData} teamIndex="1"/>
				<ListRender team={secondTeam} tooltipData={tooltipData} teamIndex="2"/>
			</div>
		</div>
	);
}

export default App;
