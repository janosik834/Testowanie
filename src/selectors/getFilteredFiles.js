export const getFilteredFiles = (files, textt) => {
  const filesSearch = textt.toLowerCase();

  return files.filter(file => {
    const fil = file;

    return (
      fil.toLowerCase().includes(filesSearch)
    );
  });
};
