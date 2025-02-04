export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Product Name',
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description',
      },
      {
        name: 'price',
        type: 'number',
        title: 'Product Price',
      },
      {
        name: 'discountPercentage',
        type: 'number',
        title: 'Discount Percentage',
      },
      {
        name: 'tags',
        type: 'array',
        title: 'Tags',
        of: [{ type: 'string' }],
      },
      {
        name: 'image',
        type: 'image',
        title: 'Product Image',
        options: {
          hotspot: true, // Allows better image cropping control
        },
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Product Rating',
      },
      {
        name: 'rateCount',
        type: 'number',
        title: 'Rating Count',
      },
      {
        name: 'id',
        type: 'string',
        title: 'Product ID',
      },
      {
        name:'stripePriceId',
        type:'string',
        title:'Stripe Price ID'
      }
    ],
  };
  