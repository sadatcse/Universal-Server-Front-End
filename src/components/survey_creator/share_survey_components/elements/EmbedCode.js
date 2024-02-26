import React from "react";
import { FaCheck } from "react-icons/fa";
import { IoClose, IoCopy } from "react-icons/io5";

function EmbedCode({
  embedTypeName,
  setEmbedTypeName,
  shareUrl,
  isShowEmbedCode,
  setShowIsEmbedCode,
  isEmbedCopied,
  onEmbedCopy,
}) {
  return (
    <div
      className={`${
        isShowEmbedCode ? "w-full h-full" : "w-0 h-0"
      } transition-all duration-300 bg-black overflow-hidden text-white absolute top-0 left-0`}
    >
      <header className="flex gap-3 items-center justify-between bg-neutral-700 px-6 py-2">
        <ul className="flex gap-3 items-center">
          <li
            className={
              embedTypeName === "html"
                ? "btn btn-sm"
                : "btn bg-transparent btn-sm text-white border-none"
            }
            onClick={() => setEmbedTypeName("html")}
          >
            HTML
          </li>
          <li
            className={
              embedTypeName === "jsx"
                ? "btn btn-sm"
                : "btn bg-transparent btn-sm text-white border-none"
            }
            onClick={() => setEmbedTypeName("jsx")}
          >
            JSX
          </li>
        </ul>
        <button
          className="text-white text-4xl"
          onClick={() => setShowIsEmbedCode(false)}
        >
          <IoClose />
        </button>
      </header>
      {embedTypeName === "html" ? (
        <pre className="px-6 py-2">
          <code id="code" className="break-words whitespace-pre-wrap">
            {`<iframe src=${shareUrl}`}
            {" style='width: 100%; height: 400px; border: 1px solid #ccc;'"}
            {' border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1)"'}
            {">"}
            {"</iframe>"}
          </code>
        </pre>
      ) : (
        <pre className="px-6 py-2">
          <code id="code" className="break-words whitespace-pre-wrap">
            {`<iframe src=${shareUrl}`}
            {
              " style={{width: '100%', height: '400px', border: '1px solid #ccc'}}"
            }
            {' border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1)"'}
            {">"}
            {"</iframe>"}
          </code>
        </pre>
      )}

      <button
        className={`flex justify-center items-center bg-black rounded-full text-lg p-2 text-gray-300 absolute bottom-2 right-3`}
        onClick={() => onEmbedCopy(embedTypeName)}
      >
        {isEmbedCopied ? <FaCheck /> : <IoCopy />}
      </button>
    </div>
  );
}

export default EmbedCode;
