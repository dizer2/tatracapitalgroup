export const imageConverter = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const fileString = reader.result as string;
      resolve(fileString); 
    };

    reader.onerror = (error) => {
      reject(error); 
    };

    reader.readAsDataURL(file);
  });
};