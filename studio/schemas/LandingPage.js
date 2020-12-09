export const BlogPost = {
  name: 'BlogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'BlogPost',
      title: 'Titolo per blog post',
      type: 'string',
      validation: Rule => [
        Rule.required()
          .min(2)
          .max(15)
          .error('Required field with at least 2 and at most 15 entries.'),
        Rule.unique()
      ]
    },
    {
      name: 'PreviewImgBlogPost',
      title: 'Thumbnail foto per carousel',
      description: 'Una foto preview cliccabile del blog post. Deve essere quadrato!',
      validation: Rule => Rule.required(),
      type: 'image',
      options: {
        crop: true,
        hotspot: true
      }
    },
    {
      name: 'FullSizeImgBlogPost',
      title: 'Fullsize foto per Blog Post',
      description: 'Una foto full size horizontale. Deve essere tagliato in horizontale!',
      validation: Rule => Rule.required(),
      type: 'image',
      options: {
        crop: true,
        hotspot: true
      }
    },
    {
      name: 'BlogPostText',
      title: 'Testo per blog post',
      type: 'text',
      validation: Rule => [
        Rule.required()
          .min(20)
          .max(500)
          .error('Required field with at least 20 and at most 1000 entries.'),
        Rule.unique()
      ]
    },
  ]
};

export const PhotoAlbumCarousel = {
  name: 'PhotoAlbumCarousel',
  title: 'Photo Album Carousel',
  type: 'document',
  fields: [
    {
      name: 'PhotoAlbumCarousel',
      title: 'Photo Album Carousel',
      description: 'Nome foto',
      type: 'string'
    },
    {
      name: 'Foto',
      title: 'Foto',
      description: 'Una foto di format 16:9',
      validation: Rule => Rule.required(),
      type: 'image',
      options: {
        crop: true,
        hotspot: true
      }
    },
  ],
};