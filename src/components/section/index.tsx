type Props = {
  children: React.ReactElement;
  className?: string;
};

export const Section = ({ className, children }: Props) => {
  return (
    <section className={className}>
      <div>{children}</div>
    </section>
  );
};
