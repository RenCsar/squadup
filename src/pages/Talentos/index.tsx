import { Container } from "./Talentos.Styled";
import { Tabs } from "../../components/features/Tabs";
import ModalWarning from "../../components/features/ModalWarning";
import { useEffect, useState } from "react";

const Talentos = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const wasRead = sessionStorage.getItem("wasRead");
    !wasRead && setModalOpen(!modalOpen);
  }, []);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
    sessionStorage.setItem("wasRead", "true");
  };

  return (
    <Container modalOpen={modalOpen}>
      <Tabs />
      <ModalWarning isOpen={modalOpen} onClose={handleModalToggle} />
    </Container>
  )
}

export default Talentos;