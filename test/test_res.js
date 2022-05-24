import React from 'react';

export default function test() {
  const { data: dataO } = { data: 213123 };
  function t() {

  }
  return (
    <div onClick={t}>{dataO}</div>);

}