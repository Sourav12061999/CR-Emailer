import { StudentDataType } from "global";
import React from "react";

export type BodyPropTypes = {
  data: StudentDataType[];
};
export function TBody({ data }: BodyPropTypes) {
  return (
    <tbody>
      {data.map((element) => (
        <tr>
          <td>{element.code}</td>
          <td>{element.name}</td>
          <td>{element.email}</td>
          <td>{element.weighted_coding_score}</td>
          <td>{element.coding_assignment}</td>
          <td>{element.coding_attendance}</td>
          <td>{element.coding_async}</td>
          <td>{element.next_coding_course}</td>
        </tr>
      ))}
    </tbody>
  );
}
