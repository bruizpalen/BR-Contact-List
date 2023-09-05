import React, { useState } from "react";
import useAppContext from "../../context/appContext";
import ModalDelete from "../ModalDelete/ModalDelete";
import { Link } from "react-router-dom";
import ModalEdit from "../ModalEdit/ModalEdit";

const CardContact = ({
  contactName,
  contactEmail,
  contactPhone,
  contactAddress,
  contactId,
}) => {
  const { actions } = useAppContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEditOpen, setEditModalOpen] = useState(false);

  // const ctx = useAppContext();
  // console.log("CardComponent", ctx);

  const handleOpenModal = (e) => {
    console.log("opening modal");
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    console.log("closing modal");
    setModalOpen(false);
  };
  const handleOpenEditModal = (e) => {
    console.log("opening modal");
    setEditModalOpen(true);
  };
  const handleCloseEditModal = () => {
    console.log("closing modal");
    setEditModalOpen(false);
  };

  return (
    <>
      {modalEditOpen && (
        <ModalDelete
          title="Edit contact"
          content="Are you sure that you want to edit this contact?"
          onCancel={handleCloseEditModal}
          onConfirm={() => {
            handleCloseEditModal();
          }}
        />
      )}
      {modalOpen && (
        <ModalDelete
          title="Delete contact"
          content="Are you sure that you want to delete the contact?"
          onCancel={handleCloseModal}
          onConfirm={() => {
            actions.removeContactById({ id: contactId });
            handleCloseModal();
          }}
        />
      )}
      <div className="card mb-4 mt-3">
        <div className="d-flex row g-0">
          <div className="col-md-3">
            <img
              src="https://placehold.co/600x800"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md ps-3 pt-3">
            <div className="card-body">
              <h5 className="card-title">{contactName}</h5>
              <p className="card-text text-body-secondary mb-1">
                <i className="fa-solid fa-location-dot"></i> {contactAddress}
              </p>
              <p className="card-text text-body-secondary mb-1">
                <i className="fa-solid fa-envelope"></i> {contactEmail}
              </p>
              <p className="card-text text-body-secondary mb-1">
                <i className="fa-solid fa-phone"></i> {contactPhone}
              </p>
            </div>
          </div>
          <div className="col-md-2 pt-5  align-items-center d-flex flex-column">
            {/* <Link to={`/edit/${contactId}`}> */}
            <button
              className="btn btn-success mb-2"
              onClick={(e) => handleOpenEditModal()}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </button>

            {/* </Link> */}
            <button
              className="btn btn-danger"
              onClick={(e) => handleOpenModal()}
              // onClick={() => actions.removeContactById({ id: contactId })}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContact;
