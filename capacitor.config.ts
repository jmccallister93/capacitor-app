import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fullstackdm.myapp',
  appName: 'fullstackdm',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
