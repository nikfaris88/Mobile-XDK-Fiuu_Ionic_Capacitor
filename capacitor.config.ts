import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic_capacitor_blank',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    iosScheme: 'https',
  },
  plugins: {
    FiuuPaymentPlugin: {
      ios: {
        swiftEnabled: true
      }
    }  }
};

export default config;
