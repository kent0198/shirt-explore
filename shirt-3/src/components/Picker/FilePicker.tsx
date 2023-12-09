import React from "react"
import CustomButton from "@comp/Button/CustomButton"

interface props {
  file?: any,
  setFile: any,
  readFile?: any,
}

const FilePicker: React.FC<props> = ({
  file, setFile, readFile
}) => {
  return (
    <div className="absolute left-full p-3 glassmorphism  w-[195px] h-[220px] flex flex-col rounded-md ml-3">
      <div className="flex flex-col flex-1">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => {
            const selectedFile = e.target.files && e.target.files[0];
            if (selectedFile) {
              setFile(selectedFile);
            }
          }}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>
        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === '' ? "No file selected" : file.name}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
            <CustomButton
              type="outline"
              title="Logo"
              handleClick={()=>readFile('logo')}
              customStyles="text-xs"
            />
            <CustomButton
              type="filled"
              title="Full"
              handleClick={()=>readFile('full')}
              customStyles="text-xs"
            />
      </div>
    </div>
  )
}

export default FilePicker