export const getFullYear = () => new Date().getFullYear();

export const getFooterCopy = (isIndex) =>
	isIndex ? 'ALX' : 'ALX main dashboard';

export const getLatestNotification = () =>
	'<strong>Urgent Requirement</strong> - complete by EOD';
