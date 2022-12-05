import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
import Divider from "../common/divider";
import SmallTitle from "../common/typografy/smallTitle";
const ChildrenExercise = () => {
  return (
    <CollapseWrapper title="Упражнение">
      <p className="mt-3">
        У вас есть компоненты Списка. Вам необходимо к каждому из них добавить
        порядковый номер, относительно того, как они располагаются на странице.
        Вы можете использовать как <code>React.Children.map</code> так и{" "}
        <code>React.Children.toArray</code>
      </p>
      <Divider />
      <SmallTitle>Решение</SmallTitle>
      <ComponentList>
        <Component />
        <Component />
        <Component />
      </ComponentList>
    </CollapseWrapper>
  );
};
const ComponentList = ({ children }) => {
  const arrayOfChildren = React.Children.toArray(children);
  return React.Children.map(arrayOfChildren, (child) =>
    React.cloneElement(child, {
      ...child.props,
      num: +child.key.replace(".", "") + 1,
    })
  );
};
ComponentList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
const Component = ({ num }) => {
  return (
    <div>
      <strong>{num}Компонет списка</strong>
    </div>
  );
};
Component.propTypes = {
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
export default ChildrenExercise;