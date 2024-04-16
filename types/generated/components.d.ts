import type { Schema, Attribute } from '@strapi/strapi';

export interface ElevateElevateCategory extends Schema.Component {
  collectionName: 'components_elevate_elevate_categories';
  info: {
    displayName: 'ElevateCategory';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
  };
}

export interface ElevateElevateContent extends Schema.Component {
  collectionName: 'components_elevate_elevate_contents';
  info: {
    displayName: 'ElevateContent';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    format: Attribute.String & Attribute.Required;
    duration: Attribute.Integer & Attribute.Required;
    height: Attribute.Integer & Attribute.Required;
    width: Attribute.Integer & Attribute.Required;
  };
}

export interface ElevateElevateImage extends Schema.Component {
  collectionName: 'components_elevate_elevate_images';
  info: {
    displayName: 'ElevateImage';
  };
  attributes: {
    ImageType: Attribute.Enumeration<
      [
        'cover',
        'thumbnail',
        'banner',
        'logo',
        'backdrop',
        'poster',
        'backdrop_clean',
        'poster_clean'
      ]
    > &
      Attribute.Required;
    url: Attribute.String & Attribute.Required;
    templateUrl: Attribute.String;
  };
}

export interface ElevateElevateRating extends Schema.Component {
  collectionName: 'components_elevate_elevate_ratings';
  info: {
    displayName: 'ElevateRating';
  };
  attributes: {
    scheme: Attribute.String & Attribute.Required;
    rating: Attribute.String & Attribute.Required;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elevate.elevate-category': ElevateElevateCategory;
      'elevate.elevate-content': ElevateElevateContent;
      'elevate.elevate-image': ElevateElevateImage;
      'elevate.elevate-rating': ElevateElevateRating;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
