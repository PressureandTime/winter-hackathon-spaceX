import React, { useEffect } from "react";

import History from "./History";

function HomePage() {
  //   const dispatch = useDispatch();
  //   const history = useSelector(state => state.historyReducer.history);

  //   const {
  //     id,
  //     title,
  //     even_date_utc,
  //     flight_number,
  //     details,
  //     links = {}
  //   } = history;
  //   const { reddit = {}, article = {}, wikipedia = {} } = links;

  //   history.map(item => console.log(item.title));
  //   useEffect(() => {
  //     dispatch(fetchHistory());
  //   }, []);

  return (
    <div>
      <History />
    </div>
  );
}

export default HomePage;
