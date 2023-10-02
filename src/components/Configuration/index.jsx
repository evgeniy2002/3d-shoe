import React from 'react';
import { ContextShoe, colorLaces, colorMesh, colorSole, colorStripes } from '../../context/Context';

export const Configuration = () => {
  const {
    lacesColor,
    setLacesColor,
    soleColor,
    setSoleColor,
    stripesColor,
    setStripesColor,
    meshColor,
    setMeshColor,
  } = React.useContext(ContextShoe);

  return (
    <div className="configuration">
      <div className="configuration__item">
        <h2 className="configuration__item__title">Шнурки</h2>
        <div className="configuration__item__values">
          {colorLaces.map((item, index) => (
            <div
              key={index}
              className={`item__color ${item.color === lacesColor.color ? 'item--active' : ''}`}
              onClick={() => setLacesColor(item)}>
              <div className="item__color__dot" style={{ background: item.color }}></div>
              <div className="item__color__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="configuration__item">
        <h2 className="configuration__item__title">Подошва</h2>
        <div className="configuration__item__values">
          {colorSole.map((item, index) => (
            <div
              key={index}
              className={`item__color ${item.color === soleColor.color ? 'item--active' : ''}`}
              onClick={() => setSoleColor(item)}>
              <div className="item__color__dot" style={{ background: item.color }}></div>
              <div className="item__color__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="configuration__item">
        <h2 className="configuration__item__title">Полосы</h2>
        <div className="configuration__item__values">
          {colorStripes.map((item, index) => (
            <div
              key={index}
              className={`item__color ${item.color === stripesColor.color ? 'item--active' : ''}`}
              onClick={() => setStripesColor(item)}>
              <div className="item__color__dot" style={{ background: item.color }}></div>
              <div className="item__color__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="configuration__item">
        <h2 className="configuration__item__title">Mesh</h2>
        <div className="configuration__item__values">
          {colorMesh.map((item, index) => (
            <div
              key={index}
              className={`item__color ${item.color === meshColor.color ? 'item--active' : ''}`}
              onClick={() => setMeshColor(item)}>
              <div className="item__color__dot" style={{ background: item.color }}></div>
              <div className="item__color__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
