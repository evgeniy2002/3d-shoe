import React from 'react';

export const colorLaces = [
  { name: 'Красный', color: '#FF0000' },
  { name: 'Зеленый', color: '#00FF00' },
  { name: 'Синий', color: '#0000FF' },
  { name: 'Желтый', color: '#FFFF00' },
  { name: 'Розовый', color: '#FF69B4' },
];
export const colorSole = [
  { name: 'Красный', color: '#FF0000' },
  { name: 'Зеленый', color: '#00FF00' },
  { name: 'Синий', color: '#0000FF' },
  { name: 'Желтый', color: '#FFFF00' },
  { name: 'Розовый', color: '#FF69B4' },
];
export const colorStripes = [
  { name: 'Красный', color: '#FF0000' },
  { name: 'Зеленый', color: '#00FF00' },
  { name: 'Синий', color: '#0000FF' },
  { name: 'Желтый', color: '#FFFF00' },
  { name: 'Розовый', color: '#FF69B4' },
];
export const colorMesh = [
  { name: 'Красный', color: '#FF0000' },
  { name: 'Зеленый', color: '#00FF00' },
  { name: 'Синий', color: '#0000FF' },
  { name: 'Желтый', color: '#FFFF00' },
  { name: 'Розовый', color: '#FF69B4' },
];
export const ContextShoe = React.createContext({});

export const ContextProvider = (props) => {
  const [lacesColor, setLacesColor] = React.useState(
    colorLaces[Math.floor(Math.random() * colorLaces.length)],
  );
  const [soleColor, setSoleColor] = React.useState(
    colorSole[Math.floor(Math.random() * colorSole.length)],
  );
  const [stripesColor, setStripesColor] = React.useState(
    colorStripes[Math.floor(Math.random() * colorStripes.length)],
  );
  const [meshColor, setMeshColor] = React.useState(
    colorMesh[Math.floor(Math.random() * colorMesh.length)],
  );

  return (
    <ContextShoe.Provider
      value={{
        lacesColor,
        setLacesColor,
        soleColor,
        setSoleColor,
        stripesColor,
        setStripesColor,
        meshColor,
        setMeshColor,
      }}>
      {props.children}
    </ContextShoe.Provider>
  );
};
