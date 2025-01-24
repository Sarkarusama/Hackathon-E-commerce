import { defineType } from "sanity";

export const categorySchema = defineType({
    name: 'categories',
    title: 'Categories',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Category Title',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Category Image',
            type: 'image',
        },
        
        {
            title: 'Number of Products',
            name: 'products',
            type: 'number',
        },
        {
            name:"slug",
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title', // Slug will be generated from the title
                maxLength: 96,
              },
        }

    ],
});

