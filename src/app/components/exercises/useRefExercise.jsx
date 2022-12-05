import React, { useRef, useState, useEffect } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
  const renderText = useRef();
  const [otherState, setOtherState] = useState("Блок");
  const renderBlock = useRef();

  useEffect(() => {
    renderText.current = otherState;
  }, [otherState]);

  const toggleOtherState = () => {
    setOtherState((renderText) => (renderText === "Блок" ? "text" : "Блок"));
    console.log(renderBlock.current.children[0]);
    renderBlock.current.style.width = "150px";
    renderBlock.current.style.height = "80px";
  };

  return (
    <CollapseWrapper title="Упражнение">
      <p className="mt-3">
        У вас есть блок, у которого заданы ширина и высота. Добавьте кнопку, при
        нажатии которой изменятся следующие свойства:
      </p>
      <ul>
        <li>Изменится содержимое блока на &quot;text&quot;</li>
        <li>высота и ширина станут равны 150 и 80 соответственно</li>
      </ul>
      <div
        className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
        ref={renderBlock}
        style={{
          height: 40,
          width: 60,
          color: "white",
        }}
      >
        <small>{otherState}</small>
      </div>
      <button className="btn btn-secondary mt-2" onClick={toggleOtherState}>
        Изменить блок
      </button>
    </CollapseWrapper>
  );
};

export default UseRefExercise;
