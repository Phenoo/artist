export default {
    name: 'posts',
    title: 'Posts',
    type: 'document',
    fields: [{
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },

        {
            name: 'year',
            title: 'Year',
            type: 'string',
        },
        {
            name: 'size',
            title: 'Size',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'mainimage',
            title: 'MainImage',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'material',
            title: 'Material',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        },
        {
            name: 'Price',
            title: 'Price',
            type: 'number',
        },
    ]
}