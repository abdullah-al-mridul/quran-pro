import React from 'react';
import { cn } from "@/lib/utils";

const createIcon = (iconName: string) => ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
    <span className={cn("material-symbols-outlined", className)} {...props}>
        {iconName}
    </span>
);

export const MenuBook = createIcon('menu_book');
export const Home = createIcon('home');
export const Mic = createIcon('mic');
export const Layers = createIcon('layers');
export const Favorite = createIcon('favorite');
export const History = createIcon('history');
export const PlaylistPlay = createIcon('playlist_play');
export const Search = createIcon('search');
export const Notifications = createIcon('notifications');
export const Settings = createIcon('settings');
export const Menu = createIcon('menu');
export const PlayArrow = createIcon('play_arrow');
export const MoreVert = createIcon('more_vert');
export const SkipPrevious = createIcon('skip_previous');
export const SkipNext = createIcon('skip_next');
export const Pause = createIcon('pause');
export const Shuffle = createIcon('shuffle');
export const Repeat = createIcon('repeat');
export const VolumeUp = createIcon('volume_up');
export const QueueMusic = createIcon('queue_music');
export const OpenInFull = createIcon('open_in_full');
export const FavoriteBorder = createIcon('favorite_border');
export const PlayCircle = createIcon('play_circle');
export const Share = createIcon('share');
export const BookmarkBorder = createIcon('bookmark');
