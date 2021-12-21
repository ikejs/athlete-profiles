// https://codesandbox.io/s/react-hook-form-uploadfile-with-thumbnail-preview--drag-and-drop-p11gy

import React, { useCallback, useEffect } from 'react';
import Image from 'next/image';
import { string, func } from 'prop-types';
import { useDropzone } from 'react-dropzone';

const styles = {
  dropZone: {
    padding: '0.33em',
    backgroundColor: '#829ba1',
    borderWidth: '2.3px',
    borderColor: '#365f69',
    borderStyle: 'dashed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const FileInput = (props) => {
  const {
    accept,
    name,
    mode = 'update',
    register,
    unregister,
    setValue,
    watch,
  } = props;

  const files = watch(name);

  const onDrop = useCallback(
    (droppedFiles) => {
      let newFiles =
        mode === 'update' ? droppedFiles : [...(files || []), ...droppedFiles];
      if (mode === 'append') {
        newFiles = newFiles.reduce((prev, file) => {
          const fo = Object.entries(file);
          if (
            prev.find((e) => {
              const eo = Object.entries(e);
              return eo.every(
                ([key, value], index) =>
                  key === fo[index][0] && value === fo[index][1]
              );
            })
          ) {
            return prev;
          }
          return [...prev, file];
        }, []);
      }
      setValue(name, newFiles, { shouldValidate: true });
    },
    [setValue, name, mode, files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
  });

  useEffect(() => {
    register(name);
    return () => {
      unregister(name);
    };
  }, [register, unregister, name]);

  return (
    <div>
      <div {...getRootProps()}>
        <input {...props} id={name} {...getInputProps()} />

        <div
          className={`rounded ${isDragActive && 'bg-secondary'}`}
          style={styles.dropZone}
        >
          {files?.length ? (
            <div>
              {files.map((file) => (
                <div key={file.name}>
                  <Image
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-white m-0">Drag Photo Here...</p>
          )}
        </div>
      </div>
    </div>
  );
};

FileInput.propTypes = {
  accept: string,
  name: string,
  mode: string,
  register: func,
  unregister: func,
  setValue: func,
  watch: func,
};

export default FileInput;
