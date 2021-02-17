import React from "react";
import { fetch_content } from "../api";
import { useDataLayerValue } from "../Reducer/DataLayer";
import Card1 from "./Card1";

function MyComponents() {
  const [state, dispatch] = useDataLayerValue();

  React.useEffect(() => {
    const rop = async () => {
      await fetch_content("https://devapi.quinn.care/graph", "POST")
        .then((res) => res.json())
        .then((data) =>
          dispatch({
            type: "FETCH_DATA",
            payload: { data },
          })
        )
        .catch((err) => console.log("Error: ", err));
    };
    rop();
  }, []);

  console.log(state);
  return (
    <div>
      <h1>Quinn Calender</h1>
      {state?.data?.posts?.map((value, key) => (
        <Card1 data={value} index = {key} />
      ))}
    </div>
  );
}

export default MyComponents;
