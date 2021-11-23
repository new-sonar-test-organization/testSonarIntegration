import { Button, Modal } from "@material-ui/core";
import React, { useState } from "react";
import DashboardModal from "../../../components/Organisms/DashboardModal";

const ModalPage = () => {
  const [openDashboardModal, setOpenDashboardModal] = useState(false);

  const handleClose = () => {
    setOpenDashboardModal(false);
  };

  const handleModalOpen = () => {
    setOpenDashboardModal(true);
  };

  return (
    <div style={{ margin: "15px" }}>
      <Button onClick={handleModalOpen} color="primary" variant="outlined">
        Open Modal
      </Button>
      <Modal open={openDashboardModal} onClose={handleClose}>
        <DashboardModal handleModalClose={handleClose} />
      </Modal>
    </div>
  );
};

export default ModalPage;
