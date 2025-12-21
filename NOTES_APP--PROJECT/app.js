export const renderNotes = (notes) => {
  let newNote =  notes.map(({ id, note, title, isPinned, isArchived }) => {
    return (
      `<div class="single-note">
         <div class="d-flex align-center title-container">
            <span class="single-note-title">${title}</span>
            <button class="button del-btn pinned-btn v-hidden" data-type="del" data-id=${id}>
                <svg data-type="del" data-id=${id}  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                </svg> 
            </button>
         </div>
         <p>${note}</p>
         <div class="options d-flex gap-md">
            <button class="button btn pinned-btn v-hidden" data-type="pinned" data-id=${id}>
               ${isPinned  ?   `<svg data-id=${id}  data-type="pinned" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M680-840v80h-40v327l-80-80v-247H400v87l-87-87-33-33v-47h400ZM480-40l-40-40v-240H240v-80l80-80v-46L56-792l56-56 736 736-58 56-264-264h-6v240l-40 40ZM354-400h92l-44-44-2-2-46 46Zm126-193Zm-78 149Z"/></svg>`  :  `<svg data-id=${id}  data-type="pinned" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Zm-286 80h252l-46-46v-314H400v314l-46 46Zm126 0Z"/></svg>`  }
            </button>
            <button class="button btn pinned-btn v-hidden" data-type="archive" data-id=${id}>
                <svg data-id=${id} data-type="archive" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z"/></svg>
            </button>
         </div>
      </div>`
    );
  })
  newNote = newNote.join("");

  return newNote;
};