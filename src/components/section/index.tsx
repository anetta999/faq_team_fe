type Props = {
  children: React.ReactElement;
};

export const Section = ({ children }: Props) => {
  return (
    <section>
      <div>{children}</div>
    </section>
  );
};
