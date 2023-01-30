import React from 'react';
import './style.css';

const RulesRegulations = () => {
    return (
        <div className="main">
            <h1 className="Underline">RULES AND REGULATIONS</h1>
            <br></br>
            

                <h2 className="Underline">1. Zero Tolerance</h2>
                    <p><b>ANY</b> fighting, harassment, racial slurs, and verbal abuse against players, staff, officials, and spectators will <b>NOT</b> be tolerated.
                    Officials have the authority to issue technical fouls to any players, coaches, and spectators. Having two technical fouls will result in ejection and a 1 game suspension.
                    Officials are instructed to automically eject players who attempt to throw punches regardless if the punch connected. All ejections come with a 1 game suspension. Other situations will be left to the discretion of officials.
                    We reserve the right to review each case to suspend further or remove entirely the involved persons with <b>NO REFUNDS</b>.</p>
                <h2 className="Underline">2. Rules</h2>
                    <p>Officials are following FIBA rules with slight modifications</p>
                <h2 className="Underline">3. Game Length</h2>    
                    <p>Games are two 20 minute halves.<br></br>
                    Running time. The time only stops in the last two minutes of the last half if the score is within 7 points.
                    </p>
                <h2 className="Underline">4.Timeouts</h2>
                    <p>Each time has 1 30 second timeout for the entire game.</p>
                <h2 className="Underline">5.Shot Clock</h2>
                    <p>There is no shot clock.</p>
                <h2 className="Underline">6.Overtime</h2>
                    <p>First overtime is 2 minutes with possession first going with the possession arrow. <br>
                    </br>Second overtime is 1 minute. Third overtime is sudden death.</p>
                <h2 className="Underline">7.Late/Forfeits</h2>
                    <p>Time will start at scheduled time. Each team needs at least 5 dressed players to play. Each minute a team is ineligible to play will result in 2 points awarded to the opposing team. If 10 minutes have passed then the team will forfeit the game.</p>
                <h2 className="Underline">8.Standings</h2>
                    <p>Team standings are based on wins. If multiple teams have the same wins, point differential will be used.</p>
        </div>
    );
};

export default RulesRegulations;
