import React, { useState } from "react";
import { StudentDataType, studentDataSchema } from "@/global";
import { z } from "zod";
import { requiredCols } from "@/global";
import { percent2Value, string2Bool } from "@/utils";

function useDataFormatter() {
  // In this tuple the first string will be the course and the second array will the actual student's data
  const [rowState, setRowState] = useState<[string, StudentDataType[]][]>([]);
  // const [error, setError] = useState({
  //   isError: false,
  //   msg: null,
  // });

  const format = (rows: string[][]) => {
    try {
      const tempRowData: [string, StudentDataType[]][] = []; // a temp variable to store the row state data

      for (let i = 0; i < rows[0].length; i++) {
        switch (rows[0][i]) {
          case "code":
            requiredCols.code = i;
            break;
          case "name":
            requiredCols.name = i;
            break;
          case "email":
            requiredCols.email = i;
            break;
          case "next_coding_course":
            requiredCols.next_coding_course = i;
            break;
          case "coding_async":
            requiredCols.coding_async = i;
            break;
          case "coding_attendance":
            requiredCols.coding_attendance = i;
            break;
          case "coding_assignment":
            requiredCols.coding_assignment = i;
            break;
          case "weighted_coding_score":
            requiredCols.weighted_coding_score = i;
            break;
        }
      }
      for (let i = 1; i < rows.length; i++) {
        const row: StudentDataType = {
          code: rows[i][requiredCols.code],
          name: rows[i][requiredCols.name],
          email: rows[i][requiredCols.email],
          next_coding_course: rows[i][requiredCols.next_coding_course],
          coding_async: string2Bool(rows[i][requiredCols.coding_assignment]),
          coding_attendance: percent2Value(
            rows[i][requiredCols.coding_attendance]
          ),
          coding_assignment: percent2Value(
            rows[i][requiredCols.coding_assignment]
          ),
          weighted_coding_score: Number(
            rows[i][requiredCols.weighted_coding_score]
          ),
        };

        // studentDataSchema.parse(row); // zod type checking
        let isStored = false;
        for (let j = 0; j < tempRowData.length; j++) {
          // If able to find the course push the current data
          if (tempRowData[j][0] === row.next_coding_course) {
            tempRowData[j][1].push(row);
            isStored = true;
            break;
          }
        }
        // If the course doesn't exist store it
        if (isStored === false) {
          tempRowData.push([row.next_coding_course, [row]]);
        }
      }
      setRowState(tempRowData); // storing the row data
    } catch (error) {
      console.log(error);
    }
  };

  return { rowState, format };
}

export default useDataFormatter;
