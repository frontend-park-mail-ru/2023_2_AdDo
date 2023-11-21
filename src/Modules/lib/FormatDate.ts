export default function formatDate(date: Date) {
	let str: string = date.getFullYear().toString();
	str += '-';
	if (date.getMonth() < 10) {
		str += '0';
	}
	str += (date.getMonth() + 1).toString();
	str += '-';
	if (date.getDate() < 10) {
		str += '0';
	}
	str += date.getDate().toString();
	return str;
}