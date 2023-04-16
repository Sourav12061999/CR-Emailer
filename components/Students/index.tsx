import { Table } from "@mantine/core";
import { HeaderPropTypes, Thead } from "./Thead";
import { BodyPropTypes, TBody } from "./TBody";
import { StudentDataType } from "global";
import { Switch } from "@/components";

type PropType = {
  headers: string[];
  data: [string, StudentDataType[]][];
};
function StudentsTable({ data, headers }: PropType) {
  return (
    <>
      <Switch data={data.map((element) => element[0])} />
      <Table>
        <Thead headers={headers}></Thead>
        {/* <TBody data={data.map(())}></TBody> */}
      </Table>
    </>
  );
}

export default StudentsTable;
