import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useDataLayerValue } from "../Reducer/DataLayer";
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
import { keyword } from "./keywords";
import { Avatar, Typography } from "@material-ui/core";

export default function Card_Modal({ index }) {
  const classes = useStyles();
  const [{ data }, dispatch] = useDataLayerValue();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // console.log("index: " +  index );

  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      i < data?.posts[index]?.rating ? <Star color="primary" /> : <StarBorder />
    );
  }

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Modal
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <div className="container m-0 p-0">
              <div className="row">
                <img
                  src={data?.posts[index]?.media[0]?.mediaurl}
                  alt=""
                  height="250px"
                  width="250px"
                />
              </div>
              <div className="row">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {data?.posts[index]?.typeofday.map((day) => (
                    <Avatar className="mr-1 mt-2">
                      {keyword[day.split(" ").join("_")]}
                    </Avatar>
                  ))}{" "}
                </div>
                <p>
                  {stars.map((val) => (
                    <span>{val}</span>
                  ))}
                </p>
              </div>
              <div className="row">Date</div>
              <div className="row" style={{width: "300px"}}>
                <Typography>{data?.posts[index]?.text}</Typography>
              </div>
              <div className="row">View full post</div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
