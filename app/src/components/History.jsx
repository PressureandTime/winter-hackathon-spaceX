import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHistory, fetchOneLaunch } from '../store/action';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import Loading from './Loading';

const useStyles = makeStyles({
  card: {
    width: '45%',
    height: 275,
    margin: '10% 5%',
    fontSize: 24,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
    // padding: "2%"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 28
  },
  pos: {
    marginBottom: 12
  },
  layout: {
    display: 'flex',
    flexDirection: 'row nowrap'
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'row nowrap',
    justifyContent: 'space-around',
    marginTop: '10%'
  },
  aTags: {
    textDecoration: 'none',
    fontSize: 12,
    cursor: 'pointer',
    color: 'white'
  },
  imgSizing: {
    width: '100%',
    padding: 0
  },
  iconBack: {
    marginTop: '230px',
    marginRight: '-5%'
  },
  iconForward: {
    marginTop: '230px',
    marginLeft: '-4.5%',
    marginRight: '5%'
  }
});

function History() {
  const [historyState, setHistoryState] = useState(1);
  const [imageState, setImageState] = useState(1);

  const dispatch = useDispatch();
  const history = useSelector(state => state.historyReducer.history);

  const classes = useStyles();

  const {
    id,
    title,
    event_date_utc,
    flight_number,
    details,
    links = {}
  } = history;

  const picsArr = useSelector(state => {
    return state.launchesReducer.launch.links;
  });

  picsArr && console.log(`Launches: `, picsArr.flickr_images);

  useEffect(() => {
    //rework so doesn't perform an axios call every 10 seconds
    dispatch(fetchHistory(historyState));
    dispatch(fetchOneLaunch(65));
    const id = setTimeout(() => {
      const prevHistoryState = historyState;
      const prevImageState = imageState;
      prevHistoryState <= 15
        ? setHistoryState(prevHistoryState + 1)
        : setHistoryState(1);
      prevImageState <= 4
        ? setImageState(prevImageState + 1)
        : setImageState(0);
    }, 20000);

    return () => clearInterval(id);
  }, [historyState, imageState]);

  const handleBack = () => {
    const prevState = historyState;
    historyState !== 1 ? setHistoryState(prevState - 1) : setHistoryState(18);
  };

  const handleForward = () => {
    const prevState = historyState;
    historyState !== 18 ? setHistoryState(prevState + 1) : setHistoryState(1);
  };

  console.log(`History: `, history);
  return (
    <div className={classes.layout}>
      <Card className={classes.card} variant="outlined">
        {picsArr && (
          <div>
            <img
              className={classes.imgSizing}
              src={picsArr.flickr_images[imageState]}
              alt="flickr"
              onClick={() => console.log('IMAGE CLICKED!!!')}
            />
          </div>
        )}
      </Card>
      <ArrowBackIosIcon onClick={handleBack} className={classes.iconBack} />
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography className={classes.pos} color="textSecondary">
            On
            {event_date_utc &&
              event_date_utc.replace('T', ' at ').replace('Z', '')}
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            variant="h5"
            component="h2"
          >
            {title}
          </Typography>
          {/* <Typography className={classes.pos} color="textSecondary">
            Flight Number: {flight_number}
          </Typography> */}
          <Typography variant="body2" component="p">
            {details}
          </Typography>
          <div className={classes.linkContainer}>
            <a href={links.article} target="_blank" className={classes.aTags}>
              Read More
            </a>
            <a href={links.wikipedia} target="_blank" className={classes.aTags}>
              Wiki
            </a>
          </div>
        </CardContent>
      </Card>
      <ArrowForwardIosIcon
        onClick={handleForward}
        className={classes.iconForward}
      />
    </div>
  );
}

export default History;
