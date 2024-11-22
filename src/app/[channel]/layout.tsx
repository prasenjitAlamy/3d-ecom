import { type ReactNode } from "react";
import { executeGraphQL } from "@/lib/graphql";
import { ChannelsListDocument } from "@/gql/graphql";

export const generateStaticParams = async () => {
	// the `channels` query is protected
	// you can either hardcode the channels or use an app token to fetch the channel list here

	return [{ channel: "default-channel" }];
};

export default function ChannelLayout({ children }: { children: ReactNode }) {
	return children;
}
