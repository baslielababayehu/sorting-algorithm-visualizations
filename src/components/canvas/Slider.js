import React, { useState, setState } from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    width: `500vw` + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3) / 6,
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const PrettoSlider = withStyles({
  root: {
    color: "#292b2c",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#f0ad4e",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: `8px`,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default function SpeedSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PrettoSlider
        valueLabelDisplay="auto"
        min={1}
        aria-label="pretto slider"
        defaultValue={0}
        onChange={props.updateValue}
        disabled={props.disabled}
      />
      <div className={classes.margin} />
    </div>
  );
}

export function ElementsSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PrettoSlider
        valueLabelDisplay="auto"
        max={100}
        min={25}
        aria-label="pretto slider"
        defaultValue={0}
        onChange={props.updateElements}
        disabled={props.disabled}
      />
      <div className={classes.margin} />
    </div>
  );
}
