export const textValidation = (text: string) => {
  if (!text.trim().length) return 'The field cannot be empty';

  return null;
};
