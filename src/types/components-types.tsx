export interface IButtonMainSlider {
  handleMouseEnter?: () => void;
  handleMouseLeave?: () => void;
  isHovering?: () => void;
  href: string;
}

export interface ITopBlock {
  title: string;
  classes: string;
  statusSearch?: boolean;
  setSearchParams: () => void;
  productQuery?: string | undefined;
}

export interface ISidebarMenuLeft {
  classes: string;
  children: React.ReactNode | null;
}

export interface ISlideItem {
  url: string;
  title: string;
  href: string;
}

export interface IAccordion {
  id: string;
  children: React.ReactNode | null;
  classAcc: string | undefined;
  classTitle: string | undefined;
  title: string | undefined;
  accordion: boolean;
  onClick: () => void;
}

export interface IAccordionList {
  children: React.ReactNode | null;
  classes: string | undefined;
}

export interface IAccordionListItem {
  classes: string | undefined;
  item: null | unknown | string;
  name?: string;
  onClick: () => void;
}

export interface IListProductsProps {
  children: React.ReactNode;
  classes: string;
  tag: keyof JSX.IntrinsicElements;
}

export interface ItemProductProps {
  id?: string | undefined;
  attributes?: object | undefined;
  classes: string;
  path: string;
  urlImageItem: string;
  modelItem: string;
  titleItem: string;
}

export interface IListProductsThumbnail {
  children: React.ReactNode | null;
  classes: string;
}

export interface IItemProductThumbnail {
  classes: string;
  path: string;
  urlImageItem: string;
  modelItem: string;
}

export interface ISectionMain {
  background: IItemBackground;
  ref: React.MutableRefObject<null>;
  children: React.ReactNode;
}

export interface ISectionGallery {
  ref: React.MutableRefObject<null>;
  colors: IPanelColorItem;
  colorsScheme: {
    id: number;
    images: {
      data: {
        attributes: {
          formats: {
            large: {
              url: string;
            };
            medium: {
              url: string;
            };
            small: {
              url: string;
            };
            thumbnail: {
              url: string;
            };
          };
        };
      }[];
    };
  }[];
}

export interface IPanelColorItem {
  data: {
    id: number;
    attributes: {
      model: string;
      colorsScheme: {
        id: number;
        images: {
          data: {
            attributes: {
              formats: {
                large: {
                  url: string;
                };
                medium: {
                  url: string;
                };
                small: {
                  url: string;
                };
                thumbnail: {
                  url: string;
                };
              };
            };
          }[];
        };
      }[];
    };
  };
}

export interface IPanelColorItemProps {
  colors: IPanelColorItem;
  colorsScheme: {
    id: number;
    images: {
      data: {
        attributes: {
          formats: {
            large: {
              url: string;
            };
            medium: {
              url: string;
            };
            small: {
              url: string;
            };
            thumbnail: {
              url: string;
            };
          };
        };
      }[];
    };
  }[];
  activeItem: number;
  activeItemGallery: number;
}

export interface IPanelColorsItem {
  colors: IPanelColorItem;
  colorsScheme: {
    id: number;
    images: {
      data: {
        attributes: {
          formats: {
            large: {
              url: string;
            };
            medium: {
              url: string;
            };
            small: {
              url: string;
            };
            thumbnail: {
              url: string;
            };
          };
        };
      }[];
    };
  }[];
  classes: string;
  activeItem: number;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
}

export interface IPanelGallery {
  colors: IPanelColorItem;
  colorsScheme: {
    id: number;
    images: {
      data: {
        attributes: {
          formats: {
            large: {
              url: string;
            };
            medium: {
              url: string;
            };
            small: {
              url: string;
            };
            thumbnail: {
              url: string;
            };
          };
        };
      }[];
    };
  }[];
  activeItem: number;
  activeItemGallery: number;
  setActiveItemGallery: React.Dispatch<React.SetStateAction<number>>;
}

export interface ISectionBg2 {
  ref: React.MutableRefObject<null>;
  background: IItemBackground;
}

export interface ISectionDescShort {
  data: {
    id: number;
    attributes: {
      model: string;
      ShortDesc: {
        title: string;
        logo: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      }[];
    };
  };
}

export interface ISectionDescShortProps {
  shortDescPath: {
    title: string;
    logo: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  }[];
}

export interface ISectionDesc {
  data: {
    id: number;
    attributes: {
      model: string;
      description: {
        id: number;
        text: string;
        title: string;
        logo: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      }[];
    };
  };
}

export interface ISectionDescProps {
  descPath: {
    id: number;
    text: string;
    title: string;
    logo: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  }[];
}

export interface ISectionBg3 {
  background: IItemBackground;
  title?: string | undefined;
  subtitle?: string | undefined;
}

export interface ISectionSpecification {
  ref: React.MutableRefObject<null>;
  children: React.ReactNode;
}

export interface ISectionSizeProduct {
  size: IItemSize;
}

export interface ITemplateInfoPressCenter {
  titleSection: string;
  pathTitle: string | null;
  pathButton: string | null;
  label: string | null;
  date: string;
  text: string;
  titleLinkButton: string | null;
  slug: string;
  blank: any;
}

export interface ITemplatePressCenterTotalSection {
  title: string;
  active: boolean;
  content: object;
}

export interface IPressCenterNews {
  id: number;
  slug: string;
  datePublication: string;
  text: string;
  linkButton: {
    href: null | string;
    label: null | string;
    target: null | string;
  };
  linkTitle: {
    href: null | string;
    label: null | string;
    target: null | string;
  };
}

export interface IDownloadTemplate {
  name: string;
  version: string;
  update: string;
  image: string;
  description: string;
  info: string;
  link: string;
  label: string;
  target: string | undefined;
}

export interface ITemplateShop {
  path: string;
  imagePath: string;
  imageAlt: string;
  title: string;
  subTitle: string;
  imagePathST?: string | undefined;
  imageAltST?: string | undefined;
}

export interface IMice {
  data: {
    id: number;
    attributes: {
      slug: string;
      cpi: string | null;
      model: string;
      series: string | null;
      size: string | null;
      title: string;
      image: {
        data: {
          id: number;
          attributes: {
            url: string;
            formats: {
              large?: {
                url: string;
              };
              medium?: {
                url: string;
              };
              small?: {
                url: string;
              };
              thumbnail?: {
                url: string;
              };
            };
          };
        };
      };
    };
  }[];
}

export interface IKeyboards {
  data: {
    id: number;
    attributes: {
      slug: string;
      model: string;
      title: string;
      backlightingKeyboard: {
        rgb: string | null;
        neon: string | null;
        single_color: string | null;
        not_available: string | null;
      };
      switchKeyboard: {
        optical: string | null;
        mecha_like: string | null;
        mechanical: string | null;
      };
      numberOfKeysKeyboard: {
        B60_87: string | null;
        B104_113: string | null;
      };
      keyGhost: {
        n_key_press: string | null;
        b12_press: string | null;
        multipress: string | null;
        not_available: string | null;
      };
      image: {
        data: {
          attributes: {
            url: string;
            formats: {
              large?: {
                url: string;
              };
              medium?: {
                url: string;
              };
              small?: {
                url: string;
              };
              thumbnail?: {
                url: string;
              };
            };
          };
        };
      };
    };
  }[];
}

export interface IHeadsets {
  data: {
    id: number;
    attributes: {
      slug: string;
      model: string;
      title: string;
      dynamicsHeadset: {
        hybrid_membrane: string | null;
        seven_one_surround_sound: string | null;
        apt_x_hd: string | null;
        two_one_stereo: string | null;
      };
      ConnectingHeadset: {
        three_five_tenths_mm: string | null;
        three_five_tenths_mm_usb: string | null;
        bt_two_and_four_tenths_Ghz_aux: string | null;
        usb: string | null;
        bt_aux: string | null;
      };
      headbandHeadset: {
        double: string | null;
        soaring_wing: string | null;
        single: string | null;
      };
      backlightingHeadset: {
        rgb: string | null;
        seven_color: string | null;
        not_available: string | null;
        neon: string | null;
        single: string | null;
      };
      image: {
        data: {
          attributes: {
            url: string;
            formats: {
              large?: {
                url: string;
              };
              medium?: {
                url: string;
              };
              small?: {
                url: string;
              };
              thumbnail?: {
                url: string;
              };
            };
          };
        };
      };
    };
  }[];
}

export interface IBluetooths {
  data: {
    id: number;
    attributes: {
      slug: string;
      model: string;
      title: string;
      ModesBluetooth: {
        audio: string | null;
        game_audio: string | null;
      };
      NoiceReductionBluetooth: {
        anc_enc: string | null;
        enc: string | null;
      };
      image: {
        data: {
          attributes: {
            url: string;
            formats: {
              large?: {
                url: string;
              };
              medium?: {
                url: string;
              };
              small?: {
                url: string;
              };
              thumbnail?: {
                url: string;
              };
            };
          };
        };
      };
    };
  }[];
}

export interface IAccessories {
  data: {
    id: number;
    attributes: {
      slug: string;
      model: string;
      title: string;
      CategoryAccessories: {
        mouse_pads: string | null;
        headphone_stands: string | null;
      };
      image: {
        data: {
          attributes: {
            url: string;
            formats: {
              large?: {
                url: string;
              };
              medium?: {
                url: string;
              };
              small?: {
                url: string;
              };
              thumbnail?: {
                url: string;
              };
            };
          };
        };
      };
    };
  }[];
}

export interface IItemName {
  data: {
    attributes: {
      slug: string;
      model: string;
      subtitle: string;
    };
  };
}

export interface IItemBackground {
  data: {
    id: number;
    attributes: {
      slug: string;
      model: string;
      bg_content_1: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      bg_content_2: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      bg_content_3: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  };
}

export interface IItemSize {
  data: {
    id: number;
    attributes: {
      slug: string;
      model: string;
      title: string;
      text: string;
      image1: {
        data: {
          attributes: {
            url: string;
          };
        }[];
      };
      image2: {
        data: {
          attributes: {
            url?: string;
          };
        };
      };
    };
  };
}

export interface IAbout {
  data: {
    id: number;
    attributes: {
      title: string | null;
      titlePage: string;
      slices: {
        title: string;
        text_1: string | null;
        text_2: string | null;
        text_3: string | null;
        subtitle_1: string | null;
        subtitle_2: string | null;
        subtitle_3: string | null;
      }[];
    };
  };
}

export interface IDownload {
  data: {
    id: number;
    attributes: {
      title: string | null;
      titleSection: string;
      slices: {
        description: string;
        info: string;
        name: string;
        version: string;
        update: string;
        links: {
          href: string;
          label: string;
          target: string | null;
        }[];
        image: {
          data: {
            attributes: {
              url: string;
            };
          };
        }[];
        subtitle_1: string | null;
        subtitle_2: string | null;
        subtitle_3: string | null;
      }[];
    };
  };
}

export interface IGalleryPage {
  data: {
    id: number;
    attributes: {
      titleSection: string;
      images: {
        data: {
          attributes: {
            caption: string;
            url: string;
            name: string;
          };
        }[];
      };
    };
  };
}

export interface ISupportPage {
  data: {
    id: number;
    attributes: {
      titlePage: string;
      slices: {
        text_1: string;
        text_2: string;
        text_3: string;
        title: string;
        subtitle_1: string | null;
        subtitle_2: string | null;
        subtitle_3: string | null;
        links: {
          href: string;
          label: string;
          target: string;
        }[];
      }[];
    };
  };
}

export interface IPressCenterPage {
  data: {
    id: number;
    attributes: {
      titlePages: string;
      slices: {
        title: string;
        info: {
          slug: string;
          datePublication: string;
          text: string;
          linkButton: {
            href: null | string;
            label: null | string;
            target: null | string;
          };
          linkTitle: {
            href: string;
            label: string;
            target: null | string;
          };
        }[];
        subtitle_1: string | null;
        subtitle_2: string | null;
        subtitle_3: string | null;
      }[];
    };
  };
}

export interface IPressCenterNews {
  pressCenter: IPressCenterNewsOne;
  newsPressCenter: IPressCenterNewsTwo;
}

export interface IPressCenterNewsOne {
  data: {
    id: number;
    attributes: {
      titlePages: string;
      slices: {
        title: string;
        info: {
          slug: string;
          datePublication: string;
          text: string;
          linkButton: {
            href: null;
            label: string;
            target: null;
          };
          linkTitle: {
            href: null;
            label: string;
            target: null;
          };
        }[];
        subtitle_1: string | null;
        subtitle_2: string | null;
        subtitle_3: string | null;
      }[];
    };
  };
}

export interface IPressCenterNewsTwo {
  data: {
    id: number;
    attributes: {
      slug: string;
      dateNews: string;
      textTop: string;
      titleNews: string;
      titleSection: string;
      image: {
        data: {
          attributes: {
            formats: {
              large: {
                url: string;
              };
              medium: {
                url: string;
              };
              small: {
                url: string;
              };
              thumbnail: {
                url: string;
              };
            };
            url: string;
          };
        };
      };
      info: {
        id: number;
        textBlock: string;
        titleBlock: string | null;
      }[];
    };
  };
}

export interface IFilterAccordionList {
  items: string[];
  onClick: React.Dispatch<React.SetStateAction<null | string>>;
  accordionToggle: boolean;
  name: string;
}

export interface IErrorMessage {
  text: string;
  message: string;
}

export interface IErrorFallback {
  error: Error;
  resetErrorBoundary: () => void;
}

export interface IInfoAccessories {
  data: {
    id: number;
    attributes: {
      slug: string;
      model: string;
      text_a: string | null;
      text_b: string | null;
      text_c: string | null;
      text_d: string | null;
      text_e: string | null;
    };
  };
}
export interface IInfoBluethooths {
  data: {
    id: number;
    attributes: {
      slug: string;
      model: string;
      bluetooth_version: string | null;
      charging_case_battery_type: string | null;
      charging_time_of_the_case: string | null;
      frequency_range: string | null;
      headphone_charging_time: string | null;
      headphone_sensitivity: string | null;
      impedance: string | null;
      microphone_sensitivity: string | null;
      music_playback_time_withone_charge: string | null;
      playback_time_from_the_charger: string | null;
      power: string | null;
      speaker_size: string | null;
      weight: string | null;
      working_distance: string | null;
      headphone_battery_type: string | null;
    };
  };
}
export interface IInfoHeadsets {
  data: {
    id: number;
    attributes: {
      slug: string;
      model: string;
      cable: string | null;
      cable_a: string | null;
      cable_b: string | null;
      cable_c: string | null;
      cable_d: string | null;
      cable_e: string | null;
      compatibility: string | null;
      connection_type: string | null;
      connection_type_a: string | null;
      connection_type_b: string | null;
      connection_type_c: string | null;
      connection_type_d: string | null;
      connection_type_e: string | null;
      headphones: string | null;
      headphones_a: string | null;
      headphones_b: string | null;
      headphones_c: string | null;
      headphones_d: string | null;
      headphones_e: string | null;
      microphone: string | null;
      microphone_a: string | null;
      microphone_b: string | null;
      microphone_c: string | null;
      microphone_d: string | null;
      microphone_e: string | null;
      weight: string | null;
    };
  };
}
export interface IInfoKeyboards {
  data: {
    id: number;
    attributes: {
      slug: string;
      model: string;
      antiGhost_technology: string | null;
      backlight_brightness: string | null;
      backlighting: string | null;
      cable_length: string | null;
      connection_type: string | null;
      extras_included: string | null;
      game_keys: string | null;
      interface: string | null;
      key_life: string | null;
      moisture_protection: string | null;
      multimedia_hotkeys: string | null;
      optical_switches: string | null;
      polling_frequency: string | null;
      polling_frequency_of_8_LK_keys: string | null;
      response_time: string | null;
      response_time_8_LK_key: string | null;
      space: string | null;
      switch_type: string | null;
      system_requirements: string | null;
    };
  };
}
export interface IInfoMice {
  data: {
    id: number;
    attributes: {
      slug: string;
      model: string;
      acceleration: string | null;
      backlighting: string | null;
      battery: string | null;
      builtIn_memory: string | null;
      cable_length: string | null;
      connection_type: string | null;
      frame_rate: string | null;
      interface: string | null;
      metal_feet: string | null;
      microswitches: string | null;
      number_of_buttons: string | null;
      polling_frequency: string | null;
      processing_speed: string | null;
      programmable_buttons: string | null;
      radio_communications: string | null;
      resolution: string | null;
      responce_time: string | null;
      scroll_wheel: string | null;
      system_requirements: string | null;
      tracing_speed: string | null;
    };
  };
}
