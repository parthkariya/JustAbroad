import React from "react";
import PathHero from "../../components/pathHero/PathHero";
import { Batches } from "../../components";
import { Helmet } from "react-helmet";

const LiveClasses = () => {
  return (
    <>
      <Helmet>

        <title>Just Abroad | Live Classes</title>

      </Helmet>
      <div>
        <PathHero title="Live Classes" />
        <Batches />
      </div>
    </>
  );
};

export default LiveClasses;
