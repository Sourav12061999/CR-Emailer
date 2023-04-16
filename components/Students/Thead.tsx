import React from "react";

export type HeaderPropTypes = {
  headers: string[];
};
export function Thead({ headers }: HeaderPropTypes) {
  return (
    <thead>
      <tr>
        {headers.map((element) => (
          <th key={element}>{element}</th>
        ))}
      </tr>
    </thead>
  );
}
