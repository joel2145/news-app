export const addClip = ({ clip }: any) => {
  return {
    type: "ADD_CLIP",
    clip,
  };
};

export const deleteClip = ({ clip }: any) => {
  return {
    type: "DELETE_CLIP",
    clip,
  };
};
