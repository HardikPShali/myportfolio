import React from 'react';

const ProjectModal = ({ showModal, handleModalClose, projectDetails }) => {
    if (!showModal || !projectDetails) {
        return null;
    }

    return (
        <div className={`modal-overlay ${showModal ? 'show' : ''}`} onClick={handleModalClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="close-btn" onClick={handleModalClose}>
                    &times;
                </div>
                <h2>{projectDetails.title} — Detail</h2>
                <div
                    style={{
                        fontSize: '14px',
                        lineHeight: '1.5',
                        textAlign: 'left',
                        maxHeight: '150px',
                        overflowY: 'auto',
                        whiteSpace: 'pre-line',
                        scrollbarWidth: 'thin'
                    }}
                    dangerouslySetInnerHTML={{ __html: projectDetails.description }}
                />
                {/* Add more details as needed */}
            </div>
        </div>
    );
};

export default ProjectModal;
