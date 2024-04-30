import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDictionaryDictionary extends Schema.CollectionType {
  collectionName: 'dictionaries';
  info: {
    singularName: 'dictionary';
    pluralName: 'dictionaries';
    displayName: 'Dictionary';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    directionality: Attribute.String & Attribute.Required;
    moreDetails: Attribute.String;
    login: Attribute.String;
    networkErrorLoadingViewTitle: Attribute.String;
    networkErrorLoadingViewContent: Attribute.String;
    reconnectionRetryMessage: Attribute.String;
    retryingMEssage: Attribute.String;
    retry: Attribute.String;
    networkRecoveryTitle: Attribute.String;
    networkRecoveryContent: Attribute.String;
    okButton: Attribute.String;
    cancelButton: Attribute.String;
    settings: Attribute.String;
    playTrailer: Attribute.String;
    director: Attribute.String;
    cast: Attribute.String;
    backButton: Attribute.String;
    season: Attribute.String;
    like: Attribute.String;
    share: Attribute.String;
    audio: Attribute.String;
    subtitles: Attribute.String;
    close: Attribute.String;
    play: Attribute.String;
    pause: Attribute.String;
    cancel: Attribute.String;
    recentSearches: Attribute.String;
    movies: Attribute.String;
    tvShows: Attribute.String;
    signupAccountQuestion: Attribute.String;
    signUp: Attribute.String;
    forgotPassword: Attribute.String;
    signOut: Attribute.String;
    myWatchlist: Attribute.String;
    editProfile: Attribute.String;
    help: Attribute.String;
    loginAccountQuestion: Attribute.String;
    needHelp: Attribute.String;
    passwordHint: Attribute.String;
    emailHint: Attribute.String;
    search: Attribute.String;
    genericErrorTitle: Attribute.String;
    genericApiErrorDescription: Attribute.String;
    resume: Attribute.String;
    language: Attribute.String;
    episodes: Attribute.String;
    moreLikeThis: Attribute.String;
    loginErrorDescription: Attribute.String;
    loginEmptyDescription: Attribute.String;
    favoriteMovies: Attribute.String;
    favoriteShows: Attribute.String;
    continueWatching: Attribute.String;
    selectLanguage: Attribute.String;
    logOutQuestion: Attribute.String;
    pairing: Attribute.String;
    detailedLogoutQuestion: Attribute.String;
    noResultsFound: Attribute.String;
    favorites: Attribute.String;
    minutes: Attribute.String;
    myContentEmptyText: Attribute.String;
    seeMore: Attribute.String;
    seeLess: Attribute.String;
    Subscribe: Attribute.String;
    numberOfSeasons: Attribute.String;
    pairingTitle: Attribute.String;
    pairingVisit: Attribute.String;
    pairingUseCode: Attribute.String;
    pairingObtaining: Attribute.String;
    resetPasswordTitle: Attribute.String;
    resetPasswordSubTitle: Attribute.String;
    sendAction: Attribute.String;
    resetPasswordErrorResultTitle: Attribute.String;
    resetPasswordErrorResultSubTitle: Attribute.String;
    resetPasswordSuccessTitle: Attribute.String;
    addFavourite: Attribute.String;
    removeFavourite: Attribute.String;
    episodeWithNumber: Attribute.String;
    seasonWithNumber: Attribute.String;
    resumePopupTitle: Attribute.String;
    resumePopupContent: Attribute.String;
    logout: Attribute.String;
    watchNowButton: Attribute.String;
    epgEntitlementPopupTitle: Attribute.String;
    epgEntitlementPopupContent: Attribute.String;
    epgLoginPopupTitle: Attribute.String;
    epgLoginPopupContent1: Attribute.String;
    epgLoginPopupContent2: Attribute.String;
    channel: Attribute.String;
    fullGuide: Attribute.String;
    upNext: Attribute.String;
    watchNow: Attribute.String;
    startOver: Attribute.String;
    searchResults: Attribute.String;
    yes: Attribute.String;
    no: Attribute.String;
    delete: Attribute.String;
    more: Attribute.String;
    download: Attribute.String;
    backl: Attribute.String;
    categorynocontenttext: Attribute.String;
    notifyMe: Attribute.String;
    downloadOnlyOnWifi: Attribute.String;
    downlaodsEmptyPage: Attribute.String;
    categoryNoContentText: Attribute.String;
    seasonAndEpisodeWithNumber: Attribute.String;
    episodeTitle: Attribute.String;
    numberOfEpisodes: Attribute.String;
    monday: Attribute.String;
    tuesday: Attribute.String;
    wednesday: Attribute.String;
    thursday: Attribute.String;
    friday: Attribute.String;
    saturday: Attribute.String;
    sunday: Attribute.String;
    noContent: Attribute.String;
    playEpisodeOfSeason: Attribute.String;
    subscribeTo: Attribute.String;
    live: Attribute.String;
    seriesepidoeshort: Attribute.String;
    off: Attribute.String;
    resumeEpisodeOfSeason: Attribute.String;
    favoriteChannels: Attribute.String;
    contactUs: Attribute.String;
    termsOfUse: Attribute.String;
    about: Attribute.String;
    searchPlaceholder: Attribute.String;
    email: Attribute.String;
    password: Attribute.String;
    watching: Attribute.String;
    backToSchedule: Attribute.String;
    loadErrorTitle: Attribute.String;
    loadErrorMessage: Attribute.String;
    viewDoesNotExistInTheAppTitle: Attribute.String;
    viewDoesNotExistInTheAppDescription: Attribute.String;
    rentSd: Attribute.String;
    subscribeWithAds: Attribute.String;
    rentHd: Attribute.String;
    appVersion: Attribute.String;
    press: Attribute.String;
    to: Attribute.String;
    dismiss: Attribute.String;
    profile: Attribute.String;
    thereAreNoSeasonsAvailableTitle: Attribute.String;
    thereAreNoSeasonsAvailableDescription: Attribute.String;
    thereAreNoEpisodesAvailableTitle: Attribute.String;
    thereAreNoEpisodesAvailableDescription: Attribute.String;
    for: Attribute.String;
    pressTwice: Attribute.String;
    epg: Attribute.String;
    remindMe: Attribute.String;
    whoIsWatching: Attribute.String;
    addNewProfile: Attribute.String;
    chooseYourAvatar: Attribute.String;
    backToProfiles: Attribute.String;
    skipForNow: Attribute.String;
    enterYourProfileName: Attribute.String;
    typeYourProfileNameHere: Attribute.String;
    proceed: Attribute.String;
    isThisAKidProfile: Attribute.String;
    noItIsNot: Attribute.String;
    yesItIs: Attribute.String;
    newProfileHasBeenCreated: Attribute.String;
    profileNameAndAvatar: Attribute.String;
    profilePin: Attribute.String;
    deleteProfile: Attribute.String;
    changeProfileName: Attribute.String;
    changeAvatar: Attribute.String;
    setUpProfilePin: Attribute.String;
    setUpProfilePinRule: Attribute.String;
    deleteProfileRule: Attribute.String;
    deleteProfileRuleForPrimaryProfile: Attribute.String;
    deleteProfileQuestionTitle: Attribute.String;
    deleteProfileQuestionDescription: Attribute.String;
    profileAvatarHasBeenChangedTitle: Attribute.String;
    profileNameHasBeenChangedTitle: Attribute.String;
    profileNameHasBeenChangedDescription: Attribute.String;
    changeYourAvatar: Attribute.String;
    profileHasBeenDeletedTitle: Attribute.String;
    profileHasBeenDeletedDescription: Attribute.String;
    manageProfiles: Attribute.String;
    myElevate: Attribute.String;
    informYourProfilePin: Attribute.String;
    wrongPin: Attribute.String;
    forgotYourPinInstructions: Attribute.String;
    setUpYourProfilePin: Attribute.String;
    yourPinHasBeenSet: Attribute.String;
    somethingWentWrong: Attribute.String;
    somethingWentWrongPin: Attribute.String;
    changeYourProfilePin: Attribute.String;
    EnterYourNewProfilePin: Attribute.String;
    EnterYourCurrentProfilePin: Attribute.String;
    yourProfilePinHasBeenUpdated: Attribute.String;
    yourProfilePinHasBeenRemoved: Attribute.String;
    removeYourProfilePin: Attribute.String;
    changeProfilePin: Attribute.String;
    removeProfilePin: Attribute.String;
    changeProfilePinDescription: Attribute.String;
    viewAll: Attribute.String;
    resetPasswordErrorInputTitle: Attribute.String;
    backToEpg: Attribute.String;
    moreOptions: Attribute.String;
    backToDetailsPage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::dictionary.dictionary',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::dictionary.dictionary',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiElevateChannelElevateChannel extends Schema.CollectionType {
  collectionName: 'elevate_channels';
  info: {
    singularName: 'elevate-channel';
    pluralName: 'elevate-channels';
    displayName: 'ElevateChannel';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    extendedDescription: Attribute.Text & Attribute.Required;
    images: Attribute.Component<'elevate.elevate-image', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::elevate-channel.elevate-channel',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::elevate-channel.elevate-channel',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiElevateContainerElevateContainer
  extends Schema.CollectionType {
  collectionName: 'elevate_containers';
  info: {
    singularName: 'elevate-container';
    pluralName: 'elevate-containers';
    displayName: 'ElevateContainer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    query: Attribute.String;
    displayText: Attribute.String;
    template: Attribute.Enumeration<
      [
        'elevate-characters',
        'elevate-hero-banner',
        'elevate-continue-watching',
        'elevate-carousel-portrait',
        'elevate-carousel-wide',
        'elevate-carousel-category-portrait',
        'elevate-carousel-category-wide',
        'elevate-category-carousel',
        'elevate-categories',
        'elevate-carousel-categories',
        'elevate-carousel-view-all-portrait',
        'elevate-grid-vertical-wide',
        'elevate-grid-vertical-portrait',
        'elevate-grid-horizontal-portrait',
        'elevate-grid-horizontal-wide'
      ]
    >;
    title: Attribute.String;
    items: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::elevate-container.elevate-container',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::elevate-container.elevate-container',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiElevateCountryElevateCountry extends Schema.CollectionType {
  collectionName: 'elevate_countries';
  info: {
    singularName: 'elevate-country';
    pluralName: 'elevate-countries';
    displayName: 'ElevateCountry';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    alpha2Code: Attribute.String & Attribute.Required;
    alpha3Code: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::elevate-country.elevate-country',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::elevate-country.elevate-country',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiElevateEpisodeElevateEpisode extends Schema.CollectionType {
  collectionName: 'elevate_episodes';
  info: {
    singularName: 'elevate-episode';
    pluralName: 'elevate-episodes';
    displayName: 'ElevateEpisode';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    duration: Attribute.Float;
    images: Attribute.Component<'elevate.elevate-image', true>;
    seasonNumber: Attribute.Integer;
    episodeNumber: Attribute.Integer;
    show: Attribute.Relation<
      'api::elevate-episode.elevate-episode',
      'oneToOne',
      'api::elevate-show.elevate-show'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::elevate-episode.elevate-episode',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::elevate-episode.elevate-episode',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiElevateLocaleElevateLocale extends Schema.CollectionType {
  collectionName: 'elevate_locales';
  info: {
    singularName: 'elevate-locale';
    pluralName: 'elevate-locales';
    displayName: 'ElevateLocale';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    code: Attribute.String & Attribute.Required;
    displayName: Attribute.String & Attribute.Required;
    countryInfo: Attribute.Relation<
      'api::elevate-locale.elevate-locale',
      'oneToOne',
      'api::elevate-country.elevate-country'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::elevate-locale.elevate-locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::elevate-locale.elevate-locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiElevateMenuElevateMenu extends Schema.CollectionType {
  collectionName: 'elevate_menus';
  info: {
    singularName: 'elevate-menu';
    pluralName: 'elevate-menus';
    displayName: 'ElevateMenu';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Relation<
      'api::elevate-menu.elevate-menu',
      'oneToMany',
      'api::elevate-menu-item.elevate-menu-item'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::elevate-menu.elevate-menu',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::elevate-menu.elevate-menu',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiElevateMenuItemElevateMenuItem
  extends Schema.CollectionType {
  collectionName: 'elevate_menu_items';
  info: {
    singularName: 'elevate-menu-item';
    pluralName: 'elevate-menu-items';
    displayName: 'ElevateMenuItem';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    query: Attribute.String;
    displayText: Attribute.String;
    icon: Attribute.String;
    action: Attribute.Enumeration<
      [
        'login',
        'logout',
        'player',
        'details',
        'kidsmode',
        'epg',
        'custom',
        'settings',
        'favorites',
        'account'
      ]
    >;
    global: Attribute.Boolean;
    hiddenWhenAuth: Attribute.Boolean;
    requireAuth: Attribute.Boolean;
    page: Attribute.Relation<
      'api::elevate-menu-item.elevate-menu-item',
      'oneToOne',
      'api::elevate-page.elevate-page'
    >;
    orientation: Attribute.Enumeration<['left', 'right', 'center']>;
    items: Attribute.Relation<
      'api::elevate-menu-item.elevate-menu-item',
      'oneToMany',
      'api::elevate-menu-item.elevate-menu-item'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::elevate-menu-item.elevate-menu-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::elevate-menu-item.elevate-menu-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiElevateMetadataElevateMetadata
  extends Schema.CollectionType {
  collectionName: 'elevate_metadata_all';
  info: {
    singularName: 'elevate-metadata';
    pluralName: 'elevate-metadata-all';
    displayName: 'ElevateMetadata';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    application: Attribute.Component<'metadata.application'>;
    providers: Attribute.Component<'metadata.providers'>;
    featureFlags: Attribute.Component<'metadata.feature-flags'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::elevate-metadata.elevate-metadata',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::elevate-metadata.elevate-metadata',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiElevateMovieElevateMovie extends Schema.CollectionType {
  collectionName: 'elevate_movies';
  info: {
    singularName: 'elevate-movie';
    pluralName: 'elevate-movies';
    displayName: 'ElevateMovie';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedDate: Attribute.DateTime &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    duration: Attribute.Float &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    director: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    cast: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    contents: Attribute.Component<'elevate.elevate-content', true> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    images: Attribute.Component<'elevate.elevate-image', true> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    categories: Attribute.Component<'elevate.elevate-category', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    rating: Attribute.Component<'elevate.elevate-rating', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::elevate-movie.elevate-movie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::elevate-movie.elevate-movie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::elevate-movie.elevate-movie',
      'oneToMany',
      'api::elevate-movie.elevate-movie'
    >;
    locale: Attribute.String;
  };
}

export interface ApiElevatePageElevatePage extends Schema.CollectionType {
  collectionName: 'elevate_pages';
  info: {
    singularName: 'elevate-page';
    pluralName: 'elevate-pages';
    displayName: 'ElevatePage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    containers: Attribute.Relation<
      'api::elevate-page.elevate-page',
      'oneToMany',
      'api::elevate-container.elevate-container'
    >;
    template: Attribute.Enumeration<
      [
        'elevate-modular-ui',
        'elevate-filter',
        'elevate-my-content',
        'elevate-search',
        'elevate-epg',
        'elevate-show-detail',
        'elevate-movie-detail',
        'elevate-profile',
        'elevate-sign-in',
        'elevate-category',
        'elevate-downloads',
        'elevate-newpage'
      ]
    >;
    theme: Attribute.Relation<
      'api::elevate-page.elevate-page',
      'oneToOne',
      'api::vikimap-theme.vikimap-theme'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::elevate-page.elevate-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::elevate-page.elevate-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiElevateProgramElevateProgram extends Schema.CollectionType {
  collectionName: 'elevate_programs';
  info: {
    singularName: 'elevate-program';
    pluralName: 'elevate-programs';
    displayName: 'ElevateProgram';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    startTime: Attribute.DateTime & Attribute.Required;
    endTime: Attribute.DateTime & Attribute.Required;
    mediaId: Attribute.String;
    type: Attribute.String & Attribute.Required;
    channelId: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::elevate-program.elevate-program',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::elevate-program.elevate-program',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiElevateSeasonElevateSeason extends Schema.CollectionType {
  collectionName: 'elevate_seasons';
  info: {
    singularName: 'elevate-season';
    pluralName: 'elevate-seasons';
    displayName: 'ElevateSeason';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    seasonNumber: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::elevate-season.elevate-season',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::elevate-season.elevate-season',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiElevateShowElevateShow extends Schema.CollectionType {
  collectionName: 'elevate_shows';
  info: {
    singularName: 'elevate-show';
    pluralName: 'elevate-shows';
    displayName: 'ElevateShow';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    images: Attribute.Component<'elevate.elevate-image', true> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    cateogries: Attribute.Component<'elevate.elevate-category', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    director: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    cast: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedDate: Attribute.DateTime &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    rating: Attribute.Component<'elevate.elevate-rating', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::elevate-show.elevate-show',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::elevate-show.elevate-show',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::elevate-show.elevate-show',
      'oneToMany',
      'api::elevate-show.elevate-show'
    >;
    locale: Attribute.String;
  };
}

export interface ApiRouteToPageMappingRouteToPageMapping
  extends Schema.CollectionType {
  collectionName: 'route_to_page_mappings';
  info: {
    singularName: 'route-to-page-mapping';
    pluralName: 'route-to-page-mappings';
    displayName: 'RouteToPageMapping';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    page: Attribute.Relation<
      'api::route-to-page-mapping.route-to-page-mapping',
      'oneToOne',
      'api::elevate-page.elevate-page'
    >;
    route: Attribute.Enumeration<
      [
        '/show',
        '/movie',
        '/home',
        '/info',
        '/profile',
        '/epg',
        '/category',
        '/pairing-code',
        '/reset-password',
        '/view-all',
        '/player',
        '/downloads',
        '/program'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::route-to-page-mapping.route-to-page-mapping',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::route-to-page-mapping.route-to-page-mapping',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRouteToPageMappingListRouteToPageMappingList
  extends Schema.CollectionType {
  collectionName: 'route_to_page_mapping_lists';
  info: {
    singularName: 'route-to-page-mapping-list';
    pluralName: 'route-to-page-mapping-lists';
    displayName: 'RouteToPageMappingList';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    mappings: Attribute.Relation<
      'api::route-to-page-mapping-list.route-to-page-mapping-list',
      'oneToMany',
      'api::route-to-page-mapping.route-to-page-mapping'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::route-to-page-mapping-list.route-to-page-mapping-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::route-to-page-mapping-list.route-to-page-mapping-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVikimapThemeVikimapTheme extends Schema.CollectionType {
  collectionName: 'vikimap_themes';
  info: {
    singularName: 'vikimap-theme';
    pluralName: 'vikimap-themes';
    displayName: 'VikimapTheme';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    colourOnBackground: Attribute.String & Attribute.Required;
    colorOnAccent: Attribute.String & Attribute.Required;
    error: Attribute.String & Attribute.Required;
    accent: Attribute.String & Attribute.Required;
    background: Attribute.String & Attribute.Required;
    alternativeBackground: Attribute.String & Attribute.Required;
    overlay: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vikimap-theme.vikimap-theme',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vikimap-theme.vikimap-theme',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::i18n.locale': PluginI18NLocale;
      'api::dictionary.dictionary': ApiDictionaryDictionary;
      'api::elevate-channel.elevate-channel': ApiElevateChannelElevateChannel;
      'api::elevate-container.elevate-container': ApiElevateContainerElevateContainer;
      'api::elevate-country.elevate-country': ApiElevateCountryElevateCountry;
      'api::elevate-episode.elevate-episode': ApiElevateEpisodeElevateEpisode;
      'api::elevate-locale.elevate-locale': ApiElevateLocaleElevateLocale;
      'api::elevate-menu.elevate-menu': ApiElevateMenuElevateMenu;
      'api::elevate-menu-item.elevate-menu-item': ApiElevateMenuItemElevateMenuItem;
      'api::elevate-metadata.elevate-metadata': ApiElevateMetadataElevateMetadata;
      'api::elevate-movie.elevate-movie': ApiElevateMovieElevateMovie;
      'api::elevate-page.elevate-page': ApiElevatePageElevatePage;
      'api::elevate-program.elevate-program': ApiElevateProgramElevateProgram;
      'api::elevate-season.elevate-season': ApiElevateSeasonElevateSeason;
      'api::elevate-show.elevate-show': ApiElevateShowElevateShow;
      'api::route-to-page-mapping.route-to-page-mapping': ApiRouteToPageMappingRouteToPageMapping;
      'api::route-to-page-mapping-list.route-to-page-mapping-list': ApiRouteToPageMappingListRouteToPageMappingList;
      'api::vikimap-theme.vikimap-theme': ApiVikimapThemeVikimapTheme;
    }
  }
}
