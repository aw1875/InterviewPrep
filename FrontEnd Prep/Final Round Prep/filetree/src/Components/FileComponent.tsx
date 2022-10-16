import { FcFile } from 'react-icons/fc';

// Types
import type File from '../@types/File';

interface FileProps {
  file: File;
  openFiles: File[];
  setSelectedFile: (file: File) => void;
}

const FileComponent = ({ file, openFiles, setSelectedFile }: FileProps) => {
  return (
    <div className="text-white mb-2 mx-4">
      <span className={`flex cursor-pointer justify-start items-center gap-x-2 ${openFiles.includes(file) && 'text-green-500'}`} onClick={() => setSelectedFile(file)}>
        <FcFile /> {file.name}
      </span>
    </div >
  )
}

export default FileComponent;
