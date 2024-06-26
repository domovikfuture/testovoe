import React, {useCallback} from 'react';
import {ETeamStatus} from "./mockdata";
import './app.css';

function ListRender({team, tooltipData, teamIndex}) {
	const composePlayerString = (idx, name) => `${idx + 1}. ${name}`
	const defineColumnClassnames = (status) => status === ETeamStatus.WIN ? "col winning" : "col loosing"

	const isTooltipAvailable = useCallback((teamIdx, idx) =>
		!!tooltipData && tooltipData?.team === teamIdx && idx === tooltipData?.idx, [tooltipData])

	return (
		<div className={defineColumnClassnames(team.status)}>
			<p className="heading">{team.status}</p>
			{team.players.map(((player, idx) => (<>
				<div className="button-text-wrapper">
					<div key={player.id} id={`${teamIndex},${idx}`} className="stats">
						{composePlayerString(idx, player.nickname)}
						-- Score: {player.score}
						-- State: {player.isAlive}
					</div>
					<button className="add-button">
						Add
					</button>
				</div>
				{isTooltipAvailable(teamIndex, idx.toString()) && (
					<div className="tooltip">Kills: {tooltipData.kills} Deaths: {tooltipData.deaths}</div>)}
			</>)))}
		</div>
	)
}

export default ListRender