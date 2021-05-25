
import ReactMarkdown from "react-markdown";


export default function Typebar({ activeNote, onUpdateNote }) {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };
  if (!activeNote) return <div className="no-active-note">No Active Note</div>;
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
          placeholder="Write your note here..."
        />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">{activeNote.body}</ReactMarkdown>
      </div>
    </div>
  );
}
