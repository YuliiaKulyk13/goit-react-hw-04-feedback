import { TitleItem } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <div>
      <TitleItem>{title}</TitleItem>
      {children}
    </div>
  );
};
