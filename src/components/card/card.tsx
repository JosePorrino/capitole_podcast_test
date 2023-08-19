interface ICard {
	className?: string;
	children: React.ReactNode;
}

export const Card = ({ className, children }: ICard) => {
	return <div className={['card', className].join(' ')}>{children}</div>;
};
