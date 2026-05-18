type SectionHeadingProps = {
  tag: string;
  title: string;
};

export default function SectionHeading({ tag, title }: SectionHeadingProps) {
  return (
    <>
      <p className="section-tag">{tag}</p>
      <h2 className="section-title">{title}</h2>
      <div className="section-line" />
    </>
  );
}
