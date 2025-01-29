import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Heading,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  Table,
  Undo,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

export default function MyEditor() {
  // for log ---------------------------------------------------------------------------------------------------
  const [HtmlScripts, setHtmlScripts] = useState("");
  console.log(HtmlScripts);

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setHtmlScripts(data);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <CKEditor
        editor={ClassicEditor}
        onChange={handleEditorChange}
        config={{
          toolbar: [
            "undo",
            "redo",
            "|",
            "heading",
            "|",
            "bold",
            "italic",
            "|",
            "link",
            "insertTable",
            "mediaEmbed",
            "|",
            "bulletedList",
            "numberedList",
            "indent",
            "outdent",
          ],
          plugins: [
            Bold,
            Essentials,
            Heading,
            Indent,
            IndentBlock,
            Italic,
            Link,
            List,
            MediaEmbed,
            Paragraph,
            Table,
            Undo,
          ],
          initialData: `<h1>type here...</h1>`,
        }}
      />
    </div>
  );
}
