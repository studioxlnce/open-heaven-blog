import {defineField, defineType} from 'sanity';
import * as category from './category';
import * as author from './author';
import { format } from "date-fns";

// async function generateSlug(input: any, schemaType: any, context: any) {
//   let slugDate = format(input.pubDate, "d-M-yy");
//   let slugTitle = input.title.replace(/\s+/g, '-').toLowerCase();
//   let slugUri = `/${slugDate}/${slugTitle}`;

//   return slugUri;
// };

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'meta',
      title: 'Meta',
    },
  ],
  fields: [
    defineField({
      group: 'meta',
      name: 'metaTags',
      title: 'Meta tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.required().warning('Please add at least one tag.'),
    }),
    defineField({
      group: 'content',
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
    defineField({
      group: 'content',
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
      validation: (Rule) => Rule.required().warning('Pleas enter the author\'s name'),
    }),
    defineField({
      group: 'content',
      name: 'mainImage',
      title: 'Main image',
      type: 'object',
      fields: [
        {
          name: 'imageUrl',
          title: 'Image URL',
          type: 'url' && 'image',
          options: {
            hotspot: true,
          },
          validation: Rule => Rule.uri({
            allowRelative: true,
            scheme: ['http', 'https'],
          }),
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Alternative text is required for accessibility',
          validation: (Rule) => Rule.required().warning('Alternative text for any image is required'),
        },
        {
          name: 'caption',
          type: 'string',
        },
      ],
      validation: (Rule) => Rule.custom(mainImage => {
        if (mainImage?.imageUrl && !mainImage?.caption) {
          return 'Caption is required';
        }
        return true;
      }),
    }),
    defineField({
      group: 'meta',
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.required().warning('Please add at least one category for ease of search.'),
    }),
    defineField({
      group: 'content',
      name: 'publishedAt',
      title: 'Published At',
      type: 'date',
      options: {
        dateFormat: 'DD-MMM-yy',
      },
      validation: (Rule) => Rule.required().error('Please enter a valid date.'),
    }),
    defineField({
      group: 'meta',
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: {
        source: (doc) => {
          const pubDate = doc.publishedAt;
          return `${pubDate}-${doc.title}`;
        },
        maxLength: 96,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 96),
      },
      validation: (Rule) => Rule.required().warning('Slug is required'),
    }),
    defineField({
      group: 'content',
      name: 'audio',
      title: 'Audio Devotional',
      type: 'url',
      // options: {
      //   source: 'title',
      // },
    }),
    defineField({
      group: 'content',
      name: 'memoryVerse',
      title: 'Memory Verse',
      type: 'text',
      validation: (Rule) => Rule.required().error('Daily memory verse is required.'),
    }),
    defineField({
      group: 'content',
      name: 'biblePassage',
      title: 'Bible passage',
      type: 'url',
      validation: (Rule) => Rule.required().error('Bible passage is required.'),
    }),
    defineField({
      group: 'content',
      name: 'messageBody',
      title: 'Message Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required().error('Message is required.'),
    }),
    defineField({
      group: 'content',
      name: 'keyPoint',
      title: 'Key Point',
      type: 'text',
      validation: (Rule) => Rule.required().error('Key Point is required.'),
    }),
    defineField({
      group: 'content',
      name: 'commentary',
      title: 'Commentary',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required().warning('No commentary has been added. Is this correct?'),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      author: 'author.name',
      Array: 'metaTags',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
});
