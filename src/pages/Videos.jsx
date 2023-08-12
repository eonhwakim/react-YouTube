import React from 'react';
import {useParams} from "react-router-dom";

export default function Videos() {
  const {keyword} = useParams();
  return (
    <h1>Videos {keyword ? '🔍${keyword}' : '🔥'}</h1>
  );
}