import "./modal.css";

export default function Modal({ visible, setVisible, children }) {
  if (!visible) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <span onClick={() => setVisible(false)} className="close">
          &times;
        </span>

        {children}
      </div>
    </div>
  );
}


