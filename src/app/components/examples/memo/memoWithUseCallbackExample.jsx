import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useCallback } from "react";

const LogOutButton = ({ onLogOut }) => {
  useEffect(() => {
    console.log("render button");
  });
  return (
    <button className="btn btn-primary mx-2" onClick={onLogOut}>
      LogOut
    </button>
  );
};
LogOutButton.propTypes = {
  onLogOut: PropTypes.func,
};
function areEqual(prevState, nextState) {
  if (prevState.onLogOut !== prevState.onLogOut) {
    return false;
  }
  return true;
}
const MemoizLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
  const [state, setState] = useState(false);
  const handleLogOut = useCallback(() => {
    localStorage.removeItem("auth");
  }, [props]);
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          setState(!state);
        }}
      >
        initiate rerender
      </button>
      <MemoizLogOutButton onLogOut={handleLogOut} />
    </>
  );
};

export default MemoWithUseCallbackExample;
