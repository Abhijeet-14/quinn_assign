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
//   state?.data?.posts?.map((value, key) => console.log(key, value.text));
  return (
    <div>
      MyComponentssss
      <ul>
        {state?.data?.posts?.map((value, key) => (
          <li key={key}>
            <Card1 data={value} /> 
            {value?.id} <br />
            {value?.iscalenderentry} <br />
            {value?.privacy} <br />
            {value?.rating} <br />
            {value?.typeofday?.map((val) => val)} <br />
            {value?.media[0]?.mediatype} <br />
            {value?.media[0]?.updatedontimestamp} <br />
            {value?.updatedontimestamp} <br />
            {value?.userid} <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponents;
