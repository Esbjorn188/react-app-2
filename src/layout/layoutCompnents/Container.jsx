
 export const Container = ({ children }) => {
  return <section className="px-4 py-12 mx-auto max-w-7x1">{children}</section>;
};

export const FullWidthContainer = ({ children }) => {
  return <div className="w-full py-16 bg-stone-100">{children}</div>;
};

export const FullWidthInnerContainer = ({ children }) => {
  return (
    <FullWidthContainer>
      <Container>{children}</Container>
    </FullWidthContainer>
  );
};
