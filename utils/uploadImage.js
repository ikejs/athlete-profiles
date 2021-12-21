const uploadImage = async (image) =>
  new Promise((resolve) => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'athlete-profiles');
    fetch(process.env.NEXT_PUBLIC_CLOUDINARY_ENDPOINT, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      // eslint-disable-next-line camelcase
      .then(({ secure_url }) => {
        resolve(secure_url);
      });
  });

export default uploadImage;
