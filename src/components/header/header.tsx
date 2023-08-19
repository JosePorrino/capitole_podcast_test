interface IHeader {
	className?: string;
	children: React.ReactNode;
}

export const Header = ({ className, children }: IHeader) => {
	return <div className={['header', className].join(' ')}>{children}</div>;
};
