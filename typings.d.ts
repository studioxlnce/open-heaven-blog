type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
};

interface Post extends Base {
    metaTags: MetaTag[];
    categories: Category[];
    title: string;
    author: Author;
    description: string;
    mainImage: Image;
    slug: Slug;
    audio: string;
    memoryVerse: string;
    biblePassage: string;
    body: Block[];
    keyPoint: string;
    commentary: Block[];
};

interface MetaTag {
    _key: string;
    _type: "metaTag";
};

interface Title {
    _type: "string";
    current: string;
};

interface Author extends Base {
    name: string;
    office: string;
    church: string;
    zone: string;
    slug: Slug;
    image: Image;
    bio: Block[];
};

interface Image {
    _type: "image";
    asset: Reference;
};

interface Reference {
    _ref: string;
    _type: "reference";
};

interface Slug {
    _type: "slug";
    current: string;
};

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "blockquote";
};

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
};

interface Category extends Base {
    title: string;
    description: string;
    image: Image;
};

interface MainImage {
    _type: "image";
    asset: Reference;
};