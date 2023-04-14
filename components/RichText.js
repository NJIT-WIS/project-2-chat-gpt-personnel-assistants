import BlockContent from "@sanity/block-content-to-react";

export default function RichText({ data }) {
  return (
    <div className="prose mb-8">
      <BlockContent blocks={data.content} />
    </div>
  );
}