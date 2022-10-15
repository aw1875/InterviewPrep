import { FcFile } from 'react-icons/fc';

// Types
import type File from '../@types/File';

interface FileProps {
  file: File;
  selectedFile: File | null | undefined;
  setSelectedFile: (file: File) => void;
}

const FileComponent = ({ file, selectedFile, setSelectedFile }: FileProps) => {
  return (
    <div className="text-white mb-2 mx-4">
      <span className={`flex cursor-pointer justify-start items-center gap-x-2 ${selectedFile === file && 'text-green-500'}`} onClick={() => setSelectedFile(file)}>
        <FcFile /> {file.name}
      </span>
    </div >
  )
}

export default FileComponent;
