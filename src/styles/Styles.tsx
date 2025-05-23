export const ModalStyle = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 420,
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  p: 4,
  outline: "none",
  minHeight: 200,
};

export const backdropStyle = {
  backdropFilter: "blur(4px)",
  backgroundColor: "rgba(0,0,0,0.15)",
};
