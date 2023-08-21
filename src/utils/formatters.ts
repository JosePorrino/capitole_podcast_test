const parseBreakLinesToHtml = (text: string | undefined) =>
	text ? text.replace(/\n/g, '<br />') : '';

const parseUrlToHtml = (text: string | undefined) =>
	text
		? text.replace(
				/(https?:\/\/[^\s]+)/g,
				"<a target='_blank' href='$1'>$1</a>"
		  )
		: '';

export const parseTextToHtml = (text: string | undefined) => {
	return parseBreakLinesToHtml(parseUrlToHtml(text));
};
