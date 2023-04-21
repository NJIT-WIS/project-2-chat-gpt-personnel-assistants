import React from "react";
import ReactMarkdown from "react-markdown";

function MarkdownListItem(props) {
    return <li className="mt-2 list-disc list-inside" {...props} />;
}

const options = {
    components: {
        h1: {
            component: "h1",
            props: {
                className: "text-2xl font-bold mb-4",
            },
        },
        h2: {
            component: "h2",
            props: {
                className: "text-xl font-semibold mb-4",
            },
        },
        h3: {
            component: "h3",
            props: {
                className: "text-lg font-semibold mb-4",
            },
        },
        h4: {
            component: "h4",
            props: {
                className: "text-sm font-medium mb-4",
            },
        },
        p: {
            component: "p",
            props: {
                className: "mb-4",
            },
        },
        a: {
            component: "a",
            props: {
                className: "text-blue-500 hover:text-blue-700",
            },
        },
        li: {
            component: MarkdownListItem,
        },
    },
};

function Markdown(props) {
    return <ReactMarkdown {...options} {...props} />;
}

export default Markdown;