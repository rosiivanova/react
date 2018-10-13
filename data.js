export const data = [
  {
    type: 'title',
    value: 'Donation form'
  },
  {
    type: 'subtitle',
    value: 'I want to help this child...',
    fields: [
      {
        name: 'field_gender',
        type: 'select',
        options: [
          {
            'label': 'Choose for me',
            'value': 0
          },
          {
            'label': 'Boy',
            'value': 1
          },
          {
            'label': 'Girl',
            'value': 2
          }
        ],
        required: true,
        title: 'Gender'
      },
      {
        name: 'field_country',
        type: 'select',
        options: [
          {
            'label': 'Choose for me',
            'value': 0
          },
          {
            'label': 'Burundi',
            'value': 1
          },
          {
            'label': 'Brazil',
            'value': 2
          },
          {
            'label': 'Chad',
            'value': 3
          },
          {
            'label': 'Ghana',
            'value': 4
          },
          {
            'label': 'Mali',
            'value': 5
          },
          {
            'label': 'Peru',
            'value': 6
          },
          {
            'label': 'Vietnam',
            'value': 7
          }
        ],
        required: false,
        title: 'Country'
      }
    ]
  },
  {
    type: 'subtitle',
    value: 'My Information',
    fields: [
      {
        name: 'field_salutation',
        type: 'select',
        options: [
          {
            'label': 'Please select',
            'value': 0
          },
          {
            'label': 'Mr.',
            'value': 1
          },
          {
            'label': 'Miss',
            'value': 2
          },
          {
            'label': 'Mrs.',
            'value': 3
          }
        ],
        required: false,
        title: 'Salutation'
      },
      {
        name: 'field_title',
        type: 'select',
        options: [
          {
            'label': 'Please select',
            'value': 0
          },
          {
            'label': 'Dr.',
            'value': 1
          },
          {
            'label': 'Prof.',
            'value': 2
          },
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
          {
            'label': 'Monthly donation',
            'value': 30
          },
          {
            'label': 'Sheep',
            'value': 44
          },
          {
            'label': 'Vegetable garden',
            'value': 155
          },
          {
            'label': 'Solar lamp',
            'value': 56
          },
          {
            'label': 'Fruit tree seedings',
            'value': 32
          }
        ],
        required: false,
        title: 'Popular gifts'
      },
      {
        name: 'field_birthday',
        type: 'date',
        required: false,
        title: 'Birthday'
      }
    ]
  },
  {
    type: 'subtitle',
    value: 'How did you know about us?',
    fields: [
      {
        name: 'field_survey',
        type: 'select',
        options: [
          {
            'label': 'Please select',
            'value': 0
          },
          {
            'label': 'TV Spot',
            'value': 1
          },
          {
            'label': 'Online Advertising',
            'value': 2
          },
          {
            'label': 'Radio',
            'value': 3
          },
          {
            'label': 'Friends',
            'value': 4
          },
          {
            'label': 'Other',
            'value': 5
          },
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
    ]
  },
  {
    type: 'button',
    value: 'Donate now'
  }
];
