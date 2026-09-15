
import React, { useState } from 'react';

import {
  ArrowRight,
  X
} from 'lucide-react';

import {
  placeholderImages
} from '../data/portfolioData';

function ProjectModal({
  project,
  onClose,
  onSave
}) {

  const [draft, setDraft] =
    useState(project);


  /*
    Update a single field.
  */

  const updateField = (key, value) => {

    setDraft((currentDraft) => ({
      ...currentDraft,
      [key]: value
    }));

  };


  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {

        if (
          event.target === event.currentTarget
        ) {
          onClose();
        }

      }}
    >

      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >

        {/* MODAL HEADER */}

        <div className="modal-head">

          <div>

            <p className="eyebrow">
              EDIT PROJECT
            </p>

            <h2 id="modal-title">
              Project details
            </h2>

          </div>


          <button
            className="close-button"
            onClick={onClose}
            aria-label="Close"
          >
            <X />
          </button>

        </div>


        {/* FORM */}

        <div className="modal-body">

          <label>
            Project title

            <input
              value={draft.title}
              onChange={(event) =>
                updateField(
                  'title',
                  event.target.value
                )
              }
            />
          </label>


          <label>
            Category

            <input
              value={draft.category}
              onChange={(event) =>
                updateField(
                  'category',
                  event.target.value
                )
              }
            />
          </label>


          <label>
            Image URL

            <input
              value={draft.image}
              onChange={(event) =>
                updateField(
                  'image',
                  event.target.value
                )
              }
            />
          </label>


          <label>
            Description

            <textarea
              rows="6"
              value={draft.description}
              onChange={(event) =>
                updateField(
                  'description',
                  event.target.value
                )
              }
            />
          </label>


          <label>
            Project link

            <input
              value={draft.link}
              onChange={(event) =>
                updateField(
                  'link',
                  event.target.value
                )
              }
            />
          </label>


          {/* IMAGE PREVIEW */}

          <div className="modal-preview">

            <img
              src={draft.image}
              alt="Project preview"
              onError={(event) => {
                event.currentTarget.src =
                  placeholderImages[0];
              }}
            />

          </div>

        </div>


        {/* ACTIONS */}

        <div className="modal-actions">

          <button
            className="secondary-button"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="primary-button"
            onClick={() => onSave(draft)}
          >
            Save changes
            <ArrowRight size={17} />
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProjectModal;

