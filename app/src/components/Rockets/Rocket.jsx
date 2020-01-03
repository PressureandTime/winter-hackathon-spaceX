import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles(theme => ({
	root: {
		width: "100%"
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular
	}
}));

function Rocket({ rocket }) {
	const classes = useStyles();

	const { active, stages, first_flight, country, description } = rocket;
	return (
		<div className={classes.root}>
			<ExpansionPanel>
				<ExpansionPanelSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading}>{active}</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<div>
						<div>
							<p>Stages:{stages}</p>
							<p>Date of first flight:{first_flight}</p>
							<p>Country:{country}</p>
							<p>{description}</p>
						</div>
						<Button>Details</Button>
					</div>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
}

export default Rocket;
