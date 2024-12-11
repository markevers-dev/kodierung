"use client";

import { Editor } from "@monaco-editor/react";
import { LoadingPing } from "components";

const Page = ({}) => {
  return (
    <div className="mb-[50px] sm:mb-[100px]">
      <Editor
        height="70vh"
        defaultLanguage="javascript"
        defaultValue="// Have fun coding!"
        theme="vs-dark"
        loading={<LoadingPing size="large" whatIsLoading="Editor" />}
      />
    </div>
  );
};

export default Page;
