import dummyMessages from "../../api/dummyMessages.json";

const MessagesDashboard = () => {
  return dummyMessages.map((msg) => {
    return (
      <>
        <a href="/#" className="dropdown-item">
          {/* Message Start */}
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
      </>
    );
  });
};
export default MessagesDashboard;
