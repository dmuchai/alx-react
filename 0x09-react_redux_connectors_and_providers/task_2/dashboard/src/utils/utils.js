export const getFullYear = () => {
  return new Date().getFullYear();
};

export const getFooterCopy = (isIndex) => {
  let res = undefined;
  isIndex
    ? (res = 'ALX School')
    : (res = 'ALX School main dashboard');
  return res;
};

export const getLatestNotification = () =>
  '<strong>Urgent requirement</strong> - complete by EOD';
