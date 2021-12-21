import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

const app = initializeApp({});

const storage = getStorage(app);

const upload = (file) => {
  const storageRef = ref(storage, file.name);
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!', snapshot);
  });
};

export { upload };
