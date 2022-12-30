export default {
  name: 'marketItems',
  title: 'Market Items',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'contractAddress',
      title: 'Contract Address',
      type: 'string',
    },

    {
      name: 'categoryType',
      title: 'Category Type',
      type: 'string',
      options: {
        list: [
          {title: 'Rossi', value: 'rossi'},
          {title: 'Bianchi', value: 'iancbhi'},
          {title: 'Bolle', value: 'bolle'},
          {title: 'Spirits', value: 'Spirits'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'yearsOld',
      title: 'Yeras Old',
      type: 'number',
    },
    {
      name: 'createdBy',
      title: 'Created By',
      type: 'reference',
      to: [{type: 'users'}],
    },
    {
      name: 'volumeTraded',
      title: 'Volume Traded',
      type: 'number',
    },
    {
      name: 'floorPrice',
      title: 'Floor Price',
      type: 'number',
    },
    {
      name: 'owners',
      title: 'Owners',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'users'}]}],
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
    },
    {
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'id',
      title: 'ID',
      type: 'string',
    },
  ],
}
