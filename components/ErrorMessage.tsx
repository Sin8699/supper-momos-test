export const ErrorMessage = ({ errors }: { errors?: string }) => {
  return errors ? <p role="alert">{errors}</p> : null;
};
