import React from "react";
import { Button } from "@lerna-ws-test/components/button";
import { meaningOfLife } from "@lerna-ws-test/foo";
import { useTest } from "@hooks/test";

export const App = () => {
  useTest();

  return (
    <div>
      {meaningOfLife}
      <Button />
    </div>
  );
};
