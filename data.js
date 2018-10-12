const data = [
  {
    type: 'title',
    value: 'Donation form'
  },
  {
    type: 'subtitle',
    value: 'I want to help this child...'
  },
  {
    type: 'subtitle',
    value: 'My Information'
  },
  {
    type: 'subtitle',
    value: 'How did you know about us?'
  },
  [
    {
      name: 'field_gender',
      type: 'select',
      options: [
        'Choose for me',
        'Boy',
        'Girl',
      ],
      required: false,
      title: 'Gender'
    },
    {
      name: 'field_country',
      type: 'select',
      options: [
        'Choose for me',
        'Burundi',
        'Brazil',
        'Chad',
        'Ghana',
        'Mali',
        'Peru',
        'Vietnam',
      ],
      required: false,
      title: 'Country'
    },
    {
      name: 'field_salutation',
      type: 'select',
      options: [
        'Please select',
        'Mr.',
        'Miss',
        'Mrs.',
      ],
      required: false,
      title: 'Salutation'
    },
    {
      name: 'field_title',
      type: 'select',
      options: [
        'Please select',
        'Dr.',
        'Prof.',
      ],
      required: false,
      title: 'Title'
    },
    {
      name: 'field_first_name',
      type: 'text',
      required: true,
      title: 'First name'
    },
    {
      name: 'field_last_name',
      type: 'text',
      required: true,
      title: 'Last name'
    },
    {
      name: 'field_company',
      type: 'text',
      required: false,
      title: 'Company'
    },
    {
      name: 'field_user_email',
      type: 'email',
      required: true,
      title: 'E-mail'
    },
    {
      name: 'field_street',
      type: 'text',
      required: true,
      title: 'Street'
    },
    {
      name: 'field_number',
      type: 'number',
      required: true,
      title: 'No.'
    },
    {
      name: 'field_postcode',
      type: 'text',
      required: true,
      title: 'Postcode'
    },
    {
      name: 'field_gift_type',
      type: 'checkboxes',
      options: [
        '30': 'Monthly donation',
        '44': 'Sheep',
        '155': 'Vegetable garden',
        '56': 'Solar lamp',
        '32': 'Fruit tree seedings',
      ],
      required: false,
      title: 'Popular gifts'
    },
    {
      name: 'field_birthday',
      type: 'date',
      required: false,
      title: 'Birthday'
    },
    {
      name: 'field_survey',
      type: 'select',
      options: [
        'Please select',
        'TV Spot',
        'Online Advertising',
        'Radio',
        'Friends',
        'Other',
      ],
      required: false,
      title: 'Where do you know us from?'
    },
    {
      name: 'field_additional_info',
      type: 'text_long',
      required: false,
      title: 'Additional information'
    },
    {
      name: 'field_comments',
      type: 'text_long',
      required: false,
      title: 'Comments'
    },
    {
      name: 'field_newsletter_signup',
      type: 'checkbox',
      required: false,
      title: 'I would like to receive the World Vision Newsletter'
    },
    {
      name: 'field_terms',
      type: 'checkbox',
      required: true,
      title: 'I agree with World Vision terms and conditions.'
    }
  ],
  {
    type: 'button',
    value: 'Donate now'
  },
];
