import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  return (
    <div>
      <h1>User:{id}</h1>
    </div>
  );
}
