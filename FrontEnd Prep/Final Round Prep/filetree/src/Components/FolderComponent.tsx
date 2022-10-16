import { useState } from "react";
import { FcFolder } from 'react-icons/fc';

// Components
import FileComponent from "./FileComponent";

// Types
import type File from '../@types/File';

interface FolderProps {
  filetree: any;
  openFiles: File[];
  setSelectedFile: (file: File) => void;
}

export default function FolderComponent({ filetree, openFiles, setSelectedFile }: FolderProps) {
  const [expand, setExpand] = useState(filetree.name === 'Interview Prep');

  if (filetree.children) {
    return (
      <>
        <span
          className={`text-white flex cursor-pointer justify-start items-center gap-x-2 mb-2 mx-4`}
          onClick={() => setExpand(!expand)}
        >
          <FcFolder /> {filetree.name}
        </span>
        <div className={`${!expand ? 'hidden' : 'block'} pl-[24px]`}>
          {filetree.children.map((i: any) => <FolderComponent key={i.name} filetree={i} openFiles={openFiles} setSelectedFile={setSelectedFile} />)}
        </div>
      </>


    );
  } else {
    return <FileComponent file={filetree} openFiles={openFiles} setSelectedFile={setSelectedFile} />
  }
}
