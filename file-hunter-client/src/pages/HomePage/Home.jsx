import React from "react";
import CommonTable from "../../components/Tables/CommonTable";
import Container from "../../mini-components/Container";
import DragAndDrop from "../../components/DragAndDrop";

const Home = () => {
  return (
    <div className="mt-6">
      <Container>
        <CommonTable />
        <DragAndDrop />
      </Container>
    </div>
  );
};

export default Home;
