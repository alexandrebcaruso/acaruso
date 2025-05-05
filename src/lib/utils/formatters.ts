// Formata telefones no padrão RS
export const formatPhone = (phone: string): string => {
  return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
};

// Adiciona referência geográfica
export const localize = (text: string): string => {
  return `${text} em Osório/RS`;
};