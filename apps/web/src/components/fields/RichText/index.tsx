type Node = {
  type?: string;
  value?: {
    url: string;
    alt: string;
  };
  children: Node[];
  url?: string;
  [key: string]: unknown;
};

type RichTextProps = {
  content: {
    [key: string]: unknown;
  }[];
};

export default function RichText({ content }: RichTextProps) {
  return (
    <div>
      {content.map((node: Node) => (
        <span>{node.type}</span>
      ))}
    </div>
  );
}
