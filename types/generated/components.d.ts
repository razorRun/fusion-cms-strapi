import type { Schema, Attribute } from '@strapi/strapi';

export interface ElevateElevateCategory extends Schema.Component {
  collectionName: 'components_elevate_elevate_categories';
  info: {
    displayName: 'ElevateCategory';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    queryIdentifier: Attribute.String;
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

export interface ElevateElevateCredit extends Schema.Component {
  collectionName: 'components_elevate_elevate_credits';
  info: {
    displayName: 'ElevateCredit';
  };
  attributes: {
    role: Attribute.String;
    name: Attribute.String;
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

export interface MetadataApplication extends Schema.Component {
  collectionName: 'components_metadata_applications';
  info: {
    displayName: 'Application';
    description: '';
  };
  attributes: {
    i18n: Attribute.Component<'metadata.i18n'> & Attribute.Required;
    multitasking: Attribute.Component<'metadata.multitasking'> &
      Attribute.Required;
    navigation: Attribute.Component<'metadata.navigation'> & Attribute.Required;
    player: Attribute.Component<'metadata.player'> & Attribute.Required;
    search: Attribute.Component<'metadata.search'> & Attribute.Required;
    theme: Attribute.Component<'metadata.theme'> & Attribute.Required;
  };
}

export interface MetadataFeatureFlags extends Schema.Component {
  collectionName: 'components_metadata_feature_flags';
  info: {
    displayName: 'Feature Flags';
  };
  attributes: {
    offlineMode: Attribute.Boolean & Attribute.DefaultTo<false>;
    appIdGidEasterEggActive: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface MetadataI18N extends Schema.Component {
  collectionName: 'components_metadata_i18ns';
  info: {
    displayName: 'i18n';
    description: '';
  };
  attributes: {
    defaultLocale: Attribute.Enumeration<['en', 'ar', 'es']> &
      Attribute.DefaultTo<'en'>;
  };
}

export interface MetadataMultitasking extends Schema.Component {
  collectionName: 'components_metadata_multitaskings';
  info: {
    displayName: 'multitasking';
    description: '';
  };
  attributes: {
    refreshTimeoutMs: Attribute.Integer & Attribute.Required;
  };
}

export interface MetadataNavigation extends Schema.Component {
  collectionName: 'components_metadata_navigations';
  info: {
    displayName: 'navigation';
    description: '';
  };
  attributes: {
    defaultRoute: Attribute.String & Attribute.DefaultTo<'/'>;
  };
}

export interface MetadataPlayer extends Schema.Component {
  collectionName: 'components_metadata_players';
  info: {
    displayName: 'player';
    description: '';
  };
  attributes: {
    bookmarkUpdateIntervalMs: Attribute.Integer & Attribute.Required;
  };
}

export interface MetadataProviders extends Schema.Component {
  collectionName: 'components_metadata_providers';
  info: {
    displayName: 'Providers';
    description: '';
  };
  attributes: {
    cms: Attribute.Component<'providers.cms'>;
    i18n: Attribute.Component<'providers.i18n'>;
    ovp: Attribute.Component<'providers.ovp'>;
    theme: Attribute.Component<'providers.theme'>;
  };
}

export interface MetadataSearch extends Schema.Component {
  collectionName: 'components_metadata_searches';
  info: {
    displayName: 'search';
    description: '';
  };
  attributes: {
    searchTriggerChars: Attribute.Integer & Attribute.Required;
    timeoutMilliseconds: Attribute.Integer & Attribute.Required;
  };
}

export interface MetadataTheme extends Schema.Component {
  collectionName: 'components_metadata_themes';
  info: {
    displayName: 'theme';
  };
  attributes: {
    default: Attribute.String & Attribute.Required;
  };
}

export interface ProvidersCms extends Schema.Component {
  collectionName: 'components_providers_cms';
  info: {
    displayName: 'Cms';
    description: '';
  };
  attributes: {
    menu: Attribute.Relation<
      'providers.cms',
      'oneToOne',
      'api::elevate-menu.elevate-menu'
    >;
    routesToPagesMappingList: Attribute.Relation<
      'providers.cms',
      'oneToOne',
      'api::route-to-page-mapping-list.route-to-page-mapping-list'
    >;
  };
}

export interface ProvidersI18N extends Schema.Component {
  collectionName: 'components_providers_i18ns';
  info: {
    displayName: 'i18n';
    description: '';
  };
  attributes: {
    dictionary: Attribute.Relation<
      'providers.i18n',
      'oneToOne',
      'api::dictionary.dictionary'
    >;
  };
}

export interface ProvidersOvp extends Schema.Component {
  collectionName: 'components_providers_ovps';
  info: {
    displayName: 'ovp';
  };
  attributes: {
    pageSize: Attribute.String;
    url: Attribute.String & Attribute.Required;
  };
}

export interface ProvidersTheme extends Schema.Component {
  collectionName: 'components_providers_themes';
  info: {
    displayName: 'theme';
    description: '';
  };
  attributes: {
    default: Attribute.Relation<
      'providers.theme',
      'oneToOne',
      'api::vikimap-theme.vikimap-theme'
    >;
    kids: Attribute.Relation<
      'providers.theme',
      'oneToOne',
      'api::vikimap-theme.vikimap-theme'
    >;
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
      'elevate.elevate-credit': ElevateElevateCredit;
      'elevate.elevate-image': ElevateElevateImage;
      'elevate.elevate-rating': ElevateElevateRating;
      'metadata.application': MetadataApplication;
      'metadata.feature-flags': MetadataFeatureFlags;
      'metadata.i18n': MetadataI18N;
      'metadata.multitasking': MetadataMultitasking;
      'metadata.navigation': MetadataNavigation;
      'metadata.player': MetadataPlayer;
      'metadata.providers': MetadataProviders;
      'metadata.search': MetadataSearch;
      'metadata.theme': MetadataTheme;
      'providers.cms': ProvidersCms;
      'providers.i18n': ProvidersI18N;
      'providers.ovp': ProvidersOvp;
      'providers.theme': ProvidersTheme;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
