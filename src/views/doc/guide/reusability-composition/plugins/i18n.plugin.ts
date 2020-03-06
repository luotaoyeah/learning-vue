import { App } from 'vue';

const I18nPlugin = {
  install(app: App, data: Record<string, string>) {
    app.config.globalProperties.$i18n = (key: string): string => {
      return data[key] || key;
    };
  },
};

export { I18nPlugin };
