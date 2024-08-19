/** @format */

import { PortableText, PortableTextReactComponents } from "@portabletext/react";

interface ISanityPortableText {
  value: any;
}

const components: PortableTextReactComponents = {
  types: {
    image: (props) => {
      const { value } = props;
      const { alt, asset } = value;
      return (
        <img
          src={asset.url}
          alt={alt || "Image"}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      );
    },
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
  },
  list: {
    bullet: ({ children }) => (
      <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>{children}</ul>
    ),
    number: ({ children }) => (
      <ol style={{ paddingLeft: "20px", listStyleType: "decimal" }}>
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li style={{ marginBottom: "10px" }}>{children}</li>
    ),
    number: ({ children }) => (
      <li style={{ marginBottom: "10px" }}>{children}</li>
    ),
  },
  block: {
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    normal: ({ children }) => <p>{children}</p>,
  },
  hardBreak: () => <br />,
  unknownMark: ({ children }) => <span>{children}</span>,
  unknownType: ({ children }) => <div>{children}</div>,

  unknownBlockStyle: ({ children }) => <p>{children}</p>,
  unknownList: ({ children }) => <ul>{children}</ul>,
  unknownListItem: ({ children }) => <li>{children}</li>,
};

export default function SanityPortableText({ value }: ISanityPortableText) {
  return <PortableText value={value} components={components} />;
}
