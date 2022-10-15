import { useEffect, useState } from "react";

// @ts-ignore
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';

// Icons
import { FcFile, FcCheckmark } from 'react-icons/fc';
import { VscClose } from 'react-icons/vsc';
import { FiCopy } from 'react-icons/fi';

// Tree Data
import filetree from "./Data";

// Components
import FileComponent from './Components/FileComponent';
import FolderComponent from "./Components/FolderComponent";

// Types
import type File from "./@types/File";

export default function Testing() {

  const [files, setFiles] = useState<File[]>([]);
  const [query, setQuery] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>();
  const [copied, setCopied] = useState(false);

  // Language Types Map
  const languageType = new Map([
    ["js", "javascript"],
    ["py", "python"],
    ["html", "html"],
    ["css", "css"],
  ]);

  /**
   * @description Filter elements based on query
   * @returns {Element[]}
   */
  const filterElements = (): File[] => {
    return files.filter((i: File) => i.name.toLowerCase().includes(query.toLowerCase()));
  }

  let filteredElements = query ? filterElements() : files;

  /**
   * @description Update setSelectedFile from other components
   * @param {File} file
   * @returns {void}
   */
  const handleFileChange = (file: File): void => {
    setSelectedFile(file);
  }

  /**
   * @description Traverse filetree and get all files from their parent folders
   * @param {any} head
   * @return {void}
   */
  const getAllFiles = (head: any): void => {
    if (!head) return;
    if (!head.children) return;

    for (const child of head.children) {
      if (!child.children) {
        if (!files.includes(child)) setFiles(files => [...files, child])
      }

      getAllFiles(child)
    }
  }

  useEffect(() => {
    getAllFiles(filetree)
  }, [])

  return (
    <div className="w-full h-screen bg-gray-800 flex flex-col">

      {/* Side Panel */}
      <div className="w-1/4 h-screen relative pb-24 bg-gray-700 border-gray-600 border-r-2 select-none overflow-hidden">
        <h1 className="w-full h-12 text-lg flex justify-center items-center text-white bg-gray-700 border-gray-600 border-b-2">
          {query ? "Search Results" : "Dynamic File Tree"}
        </h1>

        {/* Seach Bar */}
        <input
          type="text"
          className="w-full h-12 px-4 bg-gray-700 border-gray-600 border-b-2 text-white focus:outline-none"
          placeholder="Search files"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
        />

        <div className="h-full py-4 overflow-y-auto">
          {query ? (
            filteredElements.map((f: File) => <FileComponent file={f} selectedFile={selectedFile} setSelectedFile={handleFileChange} />)
          ) : (
            <FolderComponent filetree={filetree} selectedFile={selectedFile} setSelectedFile={handleFileChange} />
          )}

          {query && !filteredElements.length && (
            <p className="p-4 text-center text-sm text-gray-300">No Results Found</p>
          )}

        </div>
      </div>

      {/* Code Side */}
      <div className="w-3/4 h-screen absolute right-0 text-white">
        {selectedFile ? (
          <div className="h-full flex flex-col bg-gray-700 gap-x-2">
            <span className="py-4 h-12 flex items-center bg-gray-700 border-gray-600 border-b-2 select-none">
              <span className="h-screen px-8 flex justify-between items-center gap-x-4 bg-gray-800 border-gray-600 border-r-2">
                <FcFile />
                {selectedFile?.name}
                <VscClose size={20} className="cursor-pointer hover:text-red-400" onClick={() => setSelectedFile(null)} />
              </span>
            </span>

            {/* Copy Button */}
            {copied ? (
              <div className="p-4 absolute bottom-8 right-8 bg-gray-600 rounded duration-500 flex justify-center items-center gap-x-4 select-none">
                <FcCheckmark size={18} />
                <p className="text-sm text-gray-200">Text Copied</p>
              </div>
            ) : (
              <button
                className="p-4 absolute bottom-8 right-8 bg-gray-600 rounded duration-500 flex justify-center items-center gap-x-4 hover:bg-gray-500"
                onClick={() => {
                  navigator.clipboard.writeText(atob(selectedFile?.content ?? ""));
                  setCopied(true);

                  setTimeout(() => {
                    setCopied(false);
                  }, 3000)
                }}
              >
                <FiCopy size={18} />
              </button>
            )}

            {/* Code Block */}
            <SyntaxHighlighter
              language={languageType.get(selectedFile?.name.slice(-2))}
              style={stackoverflowDark}
              showLineNumbers={true}
              className="h-full selection:bg-green-500"
              customStyle={{ backgroundColor: "rgb(31, 41, 55)", paddingLeft: "1rem" }}
            >
              {atob(selectedFile.content ?? '')}
            </SyntaxHighlighter>
          </div>
        ) : (
          <div className="w-full h-screen flex justify-center items-center text-white">
            <p>Select a file to view contents</p>
          </div>
        )}
      </div>
    </div >
  );
}
