import { useState, useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  AccessibilityHelp,
  Autoformat,
  AutoImage,
  AutoLink,
  Autosave,
  Bold,
  Code,
  CodeBlock,
  Essentials,
  GeneralHtmlSupport,
  Heading,
  HtmlComment,
  HtmlEmbed,
  ImageBlock,
  ImageCaption,
  ImageInline,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  Paragraph,
  PasteFromOffice,
  SelectAll,
  ShowBlocks,
  SourceEditing,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextTransformation,
  Undo,
  Indent,
  IndentBlock,
  MediaEmbed,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";

export default function ImageUpload() {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const [HtmlScripts, setHtmlScripts] = useState("");
  console.log(HtmlScripts);
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setHtmlScripts(data);
  };

  useEffect(() => {
    setIsLayoutReady(true);
    return () => setIsLayoutReady(false);
  }, []);

  const editorConfig = {
    toolbar: {
      items: [
        "undo",
        "redo",
        "|",
        "sourceEditing",
        "showBlocks",
        "selectAll",
        "|",
        "heading",
        "|",
        "bold",
        "italic",
        "code",
        "|",
        "link",
        "insertImageViaUrl",
        "mediaEmbed",
        "insertTable",
        "codeBlock",
        "htmlEmbed",
        "|",
        "bulletedList",
        "numberedList",
        "indent",
          "outdent",
        "|",
        "accessibilityHelp",
      ],
    },
    plugins: [
      AccessibilityHelp,
      Autoformat,
      AutoImage,
      AutoLink,
      Autosave,
      Bold,
      Code,
      CodeBlock,
      MediaEmbed,
      Essentials,
      GeneralHtmlSupport,
      Heading,
      HtmlComment,
      HtmlEmbed,
      ImageBlock,
      ImageCaption,
      ImageInline,
      ImageInsertViaUrl,
      ImageResize,
      ImageStyle,
      ImageTextAlternative,
      ImageToolbar,
      Italic,
      Link,
      LinkImage,
      List,
      ListProperties,
      Paragraph,
      PasteFromOffice,
      SelectAll,
      ShowBlocks,
      SourceEditing,
      Table,
      TableCaption,
      TableCellProperties,
      TableColumnResize,
      TableProperties,
      TableToolbar,
      TextTransformation,
      Undo,
      Indent,
      IndentBlock,
    ],
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          // class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
        },
        {
          model: "heading4",
          view: "h4",
          title: "Heading 4",
        },
        {
          model: "heading5",
          view: "h5",
          title: "Heading 5",
        },
        {
          model: "heading6",
          view: "h6",
          title: "Heading 6",
        },
      ],
    },
    image: {
      toolbar: [
        "toggleImageCaption",
        "imageTextAlternative",
        "|",
        "imageStyle:inline",
        "imageStyle:wrapText",
        "imageStyle:breakText",
        "|",
        "resizeImage",
      ],
    },
    link: {
      addTargetToExternalLinks: true,
      defaultProtocol: "https://"
    },
    placeholder: "Type or paste your content here!",
  };



  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="main-container">
        <div
          className="editor-container editor-container_classic-editor"
          ref={editorContainerRef}
        >
          <div className="editor-container__editor">
            <div ref={editorRef}>
              {isLayoutReady && (
                <CKEditor
                  editor={ClassicEditor}
                  config={editorConfig}
                  onChange={handleEditorChange}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
