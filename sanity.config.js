/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/pages/studio/[[...index]].jsx` route
 */
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { media } from "sanity-plugin-media";
import { iconPicker } from "sanity-plugin-icon-picker";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

const deskStructure = (S) =>
	S.list()
		.title("Content")
		.items([
			S.listItem()
				.title("Home")
				.child(S.editor().schemaType("home").documentId("home")),
			S.listItem()
				.title("Partners")
				.child(
					S.editor().schemaType("partnersPage").documentId("partnersPage")
				),
			S.divider(),
			// List out the rest of the document types, but filter out the config type
			...S.documentTypeListItems().filter(
				(listItem) =>
					!["media.tag", "home", "partnersPage"].includes(listItem.getId())
			),
		]);

export default defineConfig({
	basePath: "/studio",
	projectId,
	dataset,
	// Add and edit the content schema in the './sanity/schema' folder
	schema,
	plugins: [
		deskTool({
			structure: deskStructure,
		}),
		media(),
		unsplashImageAsset(),
		iconPicker(),
	],
});
