import React from 'react';

export default function FunctionComponent({ nome, tarefa }) {
  return (
    <li>
      {nome} trará {tarefa}
    </li>
  );
}
