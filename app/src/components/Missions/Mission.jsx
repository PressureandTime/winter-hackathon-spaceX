import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import TwitterIcon from "@material-ui/icons/Twitter";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles(theme => ({
	root: {
		width: "100%"
	},
	heading: {
		fontSize: theme.typography.pxToRem(20),
		fontWeight: theme.typography.fontWeightRegular
	},
	description: {
		border: "2px solid rgb(247, 246, 243)",
		padding: "20px",
		borderRadius: "8px"
	},
	twitter: {
		marginLeft: "5px",
		marginTop: "10px"
	},
	socialDiv: {
		display: "flex",
		flexDirection: "row"
	}
}));

function Mission({ mission }) {
	const classes = useStyles();

	const {
		mission_name,
		manufacturers,
		website,
		twitter,
		description,
		height,
		diameter,
		mass,
		payload_weights
	} = mission;
	return (
		<>
			<ExpansionPanel>
				<ExpansionPanelSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading}>{mission_name}</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<div>
						<div>
							<p>Manufacturer: {manufacturers}</p>
							<p className={classes.description}>{description}</p>
							<p>
								Visit the manufacurer's website{" "}
								<a href={website} target="_ ">
									HERE.
								</a>
							</p>

							{twitter !== null ? (
								<div className={classes.socialDiv}>
									<p>
										Follow {manufacturers} on Twitter
										{/* <a href={twitter} target="_ ">
										{" "}
										HERE
								 	</a> */}
									</p>
									<a href={twitter} target="_ " className={classes.twitter}>
										<TwitterIcon color="secondary" />
									</a>
								</div>
							) : (
								<p></p>
							)}
						</div>
					</div>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</>
	);
}

export default Mission;
