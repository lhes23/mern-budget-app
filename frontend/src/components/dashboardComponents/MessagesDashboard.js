import { Fragment } from "react";
import dummyMessages from "../../api/dummyMessages.json";

const MessagesDashboard = () => {
  return (
    <>
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="/#">
          <i className="far fa-comments" />
          <span className="badge badge-danger navbar-badge">
            {dummyMessages.length}
          </span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          {dummyMessages.map((msg) => {
            return (
              <Fragment key={msg.id}>
                <a href="/#" className="dropdown-item">
                  <div className="media">
                    <img
                      src={msg.userImage}
                      alt="User Avatar"
                      className="img-size-50 mr-3 img-circle"
                    />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        {msg.senderName}
                        <span className="float-right text-sm text-danger">
                          <i className="fas fa-star" />
                        </span>
                      </h3>
                      <p className="text-sm">{msg.message}</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1" />
                        {msg.timeSent}
                      </p>
                    </div>
                  </div>
                </a>
                <div className="dropdown-divider" />
              </Fragment>
            );
          })}

          <a href="/#" className="dropdown-item dropdown-footer">
            See All Messages
          </a>
        </div>
      </li>
    </>
  );
};

export default MessagesDashboard;
