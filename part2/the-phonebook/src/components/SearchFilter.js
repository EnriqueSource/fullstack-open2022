import React from "react";

const SeachFilter = (props) => {
  //console.log(props);
  return (
    <div>
      filter shown with:
      <input value={props.value} onChange={props.onChange} />
    </div>
  );
};

export default SeachFilter;
