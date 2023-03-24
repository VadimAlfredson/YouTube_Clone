import {mkdtemp} from "fs";

export type videosItemType = {
    id: {
        kind: string
        videoId: string
        channelId: string
    }
    kind: string
    snippet: {
        channelId: string
        channelTitle:
            string
        description: string
        liveBroadcastContent: string
        publishTime: string
        publishedAt: string

        thumbnails: {
            default: { url: string, width: number, height: number }
            high: { url: string, width: number, height: number }
            medium: { url: string, width: number, height: number }
        }
        title: string
    }
}

export type channelDetailsType = {
    brandingSettings: {
        channel: {
            country: string
            description: string
            keywords: string
            title: string
            unsubscribedTrailer: string
        }
        image: {
            bannerExternalUrl: string
        }
    }
    contentDetails: {
        relatedPlaylists: {
            likes: string
            uploads: string
        }
    }
    id: {
        kind: string
        videoId: string
        channelId: string
    }
    kind: string
    snippet: {
        country: string
        customUrl: string
        description: string
        localized: {
            description: string
            title: string
        }
        publishedAt: string
        thumbnails: {
            default: { url: string, width: number, height: number }
            high: { url: string, width: number, height: number }
            medium: { url: string, width: number, height: number }
        }
        title: string
    }
    statistics: {
        hiddenSubscriberCount: boolean
        subscriberCount: string
        videoCount: string
        viewCount: string
    }
}