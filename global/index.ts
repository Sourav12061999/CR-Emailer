import { z } from "zod";

export const requiredCols = {
  code: 0,
  name: 0,
  email: 0,
  next_coding_course: 0,
  coding_async: 0,
  coding_attendance: 0,
  coding_assignment: 0,
  weighted_coding_score: 0,
};
requiredCols.code = 10;
export const studentDataSchema = z.object({
  code: z.string(),
  name: z.string(),
  email: z.string().email(),
  next_coding_course: z.string(),
  coding_async: z.boolean(),
  coding_attendance: z.number(),
  coding_assignment: z.number(),
  weighted_coding_score: z.number(),
});
