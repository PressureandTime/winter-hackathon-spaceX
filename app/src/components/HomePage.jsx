import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHistory } from "../store/action";

function HomePage() {
  const dispatch = useDispatch();
  const history = useSelector(state => {
    console.log(state);
  });

  console.log(history);
  useEffect(() => {
    dispatch(fetchHistory());
  }, []);
  return (
    <div>
      <h1>HomePage</h1>
    </div>
  );
}

export default HomePage;
