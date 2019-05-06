import React from "react";
import Badge from '../components/Badge';
import { Link } from 'react-router-dom';
import confLogo from '../images/confLogo.jpg';
import DeleteBadgeModal from "../components/DeleteBadgeModal";

function BadgeDetails(props) {
  const badge = props.badge;
  return (
    <div>
      <div>
        <div className="container" style={{ background: "#1C121B" }}>
          <div className="row">
            <div
              className="col-6"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <img src={confLogo} alt="logo de la conferencia" width={150} />
            </div>
            <div
              className="col-6"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <h1 style={{ color: "#826289" }}>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-6"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <Badge
                firstName={badge.firstName}
                lastName={badge.lastName}
                email={badge.email}
                jobTitle={badge.jobTitle}
                twitter={badge.twitter}
              />
            </div>
            <div className="col-6">
              <h2>Actions</h2>
              <div>
                <div>
                  <Link
                    className="btn btn-primary mb-4"
                    to={`/badges/${badge.id}/edit`}
                  >
                    Edit
                  </Link>
                </div>
                <div>
                  <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                  <DeleteBadgeModal
                    isOpen={props.modalIsOpen}
                    onClose={props.onCloseModal}
                    onDeleteBadge={props.onDeleteBadge}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
