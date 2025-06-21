function Modal({ art, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <img src={art.image} alt={art.title} />
        <div className="modal-info">
          <h2>{art.title}</h2>
          <p className="artist">by {art.artist}</p>
          <p className="description">{art.fullDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;