import React from "react";
import { Avatar, makeStyles } from "@material-ui/core";
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
import Card2 from "./Card_Modal";
import { useDataLayerValue } from "../Reducer/DataLayer";
import { keyword } from "./keywords";

function Card1({ data, index }) {
//   console.log("Key: ", index);

  const [state, dispatch] = useDataLayerValue();
  const classes = useStyles();

  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(i < data.rating ? <Star color="primary" /> : <StarBorder />);
  }

  const openModal = (idx) => {
    console.log(idx);
    // return <Card2 data={value} />;
  };

  return (
    <div className={classes.card1_root}>
      <div className="bg-danger p-2" onClick={() => openModal(index)}>
          <Card2 index={index} />
        <p>
          {stars.map((val) => (
            <span>{val}</span>
          ))}
        </p>
        <img
          src={data.media[0]?.mediaurl}
          alt=""
          height="128px"
          width="128px"
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          {data?.typeofday.map((day) => (
            <Avatar className="mr-1 mt-2">
              {keyword[day.split(" ").join("_")]}
            </Avatar>
          ))}{" "}
        </div>
        {/* <p>{data?.text}</p> */}
      </div>
    </div>
  );
}

export default Card1;

const useStyles = makeStyles({
  card1_root: {
    display: "grid",
    placeItems: "center",
    gridTemplateRow: "auto 1fr auto",
  },
});

// const keyword = {
//   hair_cut: "Cu",
//   protein_treatment: "Pr",
//   hair_color: "HC",
//   deep_conditioning: "DC",
//   clarifying: "C",
// };
