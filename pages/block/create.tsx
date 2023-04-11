import { Upload } from "@/components";
import type { NextPage } from "next";
import Head from "next/head";

const CreateBlock: NextPage = () => {
  return (
    <>
      <Head>
        <title>Add new block data</title>
        <meta
          name="description"
          content="In this page you have to add the block data"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div style={{ width: "100%", maxWidth: 600, marginInline: "auto" }}>
          <Upload />
        </div>
      </main>
    </>
  );
};

export default CreateBlock;
