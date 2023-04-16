import React, { useState } from "react";
import { studentDataSchema } from "@/global";
import { z } from "zod";
import { requiredCols } from "@/global";
import { percent2Value, string2Bool } from "@/utils";

type StudentDataType = z.infer<typeof studentDataSchema>;
function useDataFormatter() {
  // In this tuple the first string will be the course and the second array will the actual student's data
  const [rowsData, setRowsData] = useState<[string, StudentDataType[]][]>([]);
  const [headerData, setHeaderData] = useState<string[]>([]);

  const format = (rows: string[][]) => {
    const tempRowData: [string, StudentDataType[]][] = []; // a temp variable to store the row state data
    setHeaderData(rows[0]); // the first row is going to be the heading
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
      studentDataSchema.parse(row); // zod type checking
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
    setRowsData(tempRowData); // storing the row data
  };

  return { rowsData, headerData, format };
}

export default useDataFormatter;
