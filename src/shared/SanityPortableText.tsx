/** @format */

import { client } from "@/sanity/client";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";

import ImageLoader from "./ImageLoader";

interface ISanityPortableText {
  value: any;
}

const components: PortableTextReactComponents = {
  types: {
    image: (props) => {
      const { value } = props;
      const { alt, asset } = value;

      if (asset) {
        const imageURL = urlBuilder(client).image(asset?._ref)?.url() || "";

        return (
          <ImageLoader
            className="mt-[20px] max-w-full h-auto"
            imageURL={imageURL}
            height={1000}
            width={1000}
            alt={alt || "Motoindo Image"}
          />
        );
      }
    },
    youtube: (props) => {
      const { value } = props;

      if (value) {
        const youtubeURL = value.url;

        return (
          <iframe
            className="mt-[20px] aspect-video w-full"
            src={youtubeURL}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
        );
      }
    },
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
  },
  list: {
    bullet: ({ children }) => (
      <ul
        style={{
          marginTop: "10px",
          paddingLeft: "30px",
          listStyleType: "disc",
        }}>
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol
        style={{
          marginTop: "10px",
          paddingLeft: "30px",
          listStyleType: "decimal",
        }}>
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
    h1: ({ children }) => (
      <h1 className="text-[2rem] sm:text-[1.75rem]">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-[1.75rem] sm:text-[1.5rem]">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[1.5rem] sm:text-[1.25rem]">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-[1.3rem] sm:text-[1.25rem]">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-[1.25rem] sm:text-[1rem]">{children}</p>
    ),
  },
  hardBreak: () => <br />,
  unknownMark: ({ children }) => <span>{children}</span>,
  unknownType: ({ children }) => <div>{children}</div>,

  unknownBlockStyle: ({ children }) => (
    <p className="text-[1.25rem] sm:text-[1rem]">{children}</p>
  ),
  unknownList: ({ children }) => <ul>{children}</ul>,
  unknownListItem: ({ children }) => <li>{children}</li>,
};

export default function SanityPortableText({ value }: ISanityPortableText) {
  return <PortableText value={value} components={components} />;
}
