import { ReactElement, useEffect, useState } from "react";

// @ts-ignore
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';

// Icons
import { FcFile, FcFolder, FcCheckmark } from 'react-icons/fc';
import { VscClose } from 'react-icons/vsc';
import { FiCopy } from 'react-icons/fi';

// Tree Data
import { filetree } from './Data';

interface Element {
  name: string;
  depth: number;
  children: boolean;
  content?: string;
}

export default function App() {

  const [elements, setSelements] = useState<Element[]>([]);
  const [query, setQuery] = useState("");
  const [selectedElement, setSelectedElement] = useState<Element | null>();
  const [copied, setCopied] = useState(false);


  /**
   * @description Traverse data to create elements array
   * @param {any} head
   * @param {number} depth
   * @return {null}
   */
  const traverse = (head: any, depth: number) => {
    if (!head) return;
    if (!head.children) return;

    for (const child of head.children) {
      if (!child.children)
        setSelements(elements => [...elements, { name: child.name, depth, children: false, content: child.content || null }]);
      else
        setSelements(elements => [...elements, { name: child.name, depth, children: true }]);
      traverse(child, depth + 1);
    }
  }

  /**
   * @description Helper function for creating DOM element from Element
   * @param {Element} name, depth, children, content
   * @param {boolean} filter?
   * @returns {ReactElement}
   */
  const createElement = ({ name, depth, children, content }: Element, filter?: boolean): ReactElement => {
    const updateSelected = () => {
      if (!children) {
        setSelectedElement({ name, depth, children, content });
        filteredElements = elements;
      }
      if (selectedElement?.name === name) setSelectedElement(null);
    };

    if (filter) {
      return (
        <div className="text-white mb-2 mx-4">
          <span className={`flex cursor-pointer justify-start items-center gap-x-2 ${selectedElement?.name === name && 'text-green-500'}`} onClick={() => updateSelected()}>
            {children ? (
              <><FcFolder /> {name}</>
            ) : (
              <><FcFile /> {name}</>
            )}
          </span>
        </div >
      )
    } else {
      return (
        <div className="text-white mb-2 mx-4" style={{ paddingLeft: `${24 * depth}px` }}>
          <span
            className={`flex ${!children && 'cursor-pointer'} justify-start items-center gap-x-2 ${selectedElement?.name === name && 'text-green-500'}`}
            onClick={() => updateSelected()}
          >
            {children ? (
              <><FcFolder /> {name}</>
            ) : (
              <><FcFile /> {name}</>
            )}
          </span>
        </div >
      )
    }
  }

  /**
   * @description Filter elements based on query
   * @returns {Element[]}
   */
  const filterElements = (): Element[] => {
    return elements.filter((i: Element) => i.name.toLowerCase().includes(query.toLowerCase()) && !i.children);
  }

  let filteredElements = query ? filterElements() : elements;

  useEffect(() => {
    setSelements([{ name: filetree.name, depth: 0, children: !!filetree.children }]);
    traverse(filetree, 1);
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
          {filteredElements.length > 0 && (
            filteredElements.map((fe: Element) => createElement(fe, !!query))
          )}

          {query && !filteredElements.length && (
            <p className="p-4 text-center text-sm text-gray-300">No Results Found</p>
          )}
        </div>
      </div>

      {/* Code Side */}
      <div className="w-3/4 h-screen absolute right-0 text-white">
        {selectedElement ? (
          <div className="h-full flex flex-col bg-gray-700 gap-x-2">
            <span className="py-4 h-12 flex items-center bg-gray-700 border-gray-600 border-b-2 select-none">
              <span className="h-screen px-8 flex justify-between items-center gap-x-4 bg-gray-800 border-gray-600 border-r-2">
                <FcFile />
                {selectedElement?.name}
                <VscClose size={20} className="cursor-pointer hover:text-red-400" onClick={() => setSelectedElement(null)} />
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
                  navigator.clipboard.writeText(atob(selectedElement?.content ?? ""));
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
              language={`${selectedElement?.name.slice(-2) === "js" ? "javascript" : "python"}`}
              style={stackoverflowDark}
              showLineNumbers={true}
              className="h-full selection:bg-green-500"
              customStyle={{ backgroundColor: "rgb(31, 41, 55)", paddingLeft: "1rem" }}
            >
              {atob(selectedElement.content ?? '')}
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
