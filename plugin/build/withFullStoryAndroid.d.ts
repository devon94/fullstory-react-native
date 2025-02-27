import { ConfigPlugin } from "@expo/config-plugins";
import { FullStoryPluginProps } from ".";
export declare const addFullStoryMavenRepo: (projectBuildGradle: string) => string;
export declare const addFullStoryProjectDependency: (projectBuildGradle: string, version: string) => string;
export declare const addFullStoryGradlePlugin: (appBuildGradle: string, { org, host, logLevel, enabledVariants }: FullStoryPluginProps) => string;
declare const withFullStoryAndroid: ConfigPlugin<FullStoryPluginProps>;
export default withFullStoryAndroid;
