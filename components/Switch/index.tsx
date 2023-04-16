import { SegmentedControl } from "@mantine/core";

import { useStyles } from "./style";

type PropTypes = {
  data: string[];
};
export function Switch({ data }: PropTypes) {
  const { classes } = useStyles();
  return (
    <SegmentedControl radius="xl" size="md" data={data} classNames={classes} />
  );
}
