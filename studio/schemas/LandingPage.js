export const BlogPost = {
  name: 'BlogPost',
  title: 'BlogPost',
  type: 'document',
  fields: [
    {
      name: 'PreviewImg',
      title: 'Thumbnail foto per carousel',
      description: 'Una foto preview cliccabile del blog post',
      validation: Rule => Rule.required(),
      type: 'image',
      options: {
        crop: true,
        hotspot: true
      }
    }
  ]
};