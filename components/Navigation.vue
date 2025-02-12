<template>
    <nav class="w-60 max-h-[calc(100dvh-56px)] mt-14 overflow-scroll flex flex-col">
        <NavigationSection>
            <NavigationItem to="/" icon="Home" label="Home" />
            <NavigationItem icon="Shorts" label="Shorts" />
            <NavigationItem icon="Subscriptions" label="Subscriptions" />
        </NavigationSection>

        <NavigationSection>
            <NavigationItem icon="User" label="You" />
            <NavigationItem icon="History" label="History" />
        </NavigationSection>

        <NavigationSection class="py-6 flex flex-col items-center gap-3">
            <p class="text-balance text-center text-sm">
                Sign in to like videos, comment, and subscribe.
            </p>
            <Button variant="cta" icon="User" label="Sign in" />
        </NavigationSection>

        <NavigationSection>
            <h2 class="px-3 pt-2 pb-3 font-medium">Explore</h2>
            <NavigationItem icon="Trending" label="Trending" />
            <NavigationItem icon="Music" label="Music" />
            <NavigationItem icon="Movies" label="Movies & TV" />
            <NavigationItem icon="Live" label="Live" />
            <NavigationItem icon="Gaming" label="Gaming" />
            <NavigationItem icon="News" label="News" />
            <NavigationItem icon="Sports" label="Sports" />
            <NavigationItem icon="Learning" label="Learning" />
            <NavigationItem icon="Fashion" label="Fashion & Beauty" />
            <NavigationItem icon="Podcasts" label="Podcasts" />
            <NavigationItem icon="Playables" label="Playables" />
        </NavigationSection>

        <NavigationSection>
            <h2 class="px-3 pt-2 pb-3 font-medium">More from YouTube</h2>
            <NavigationItem icon="YouTubePremium" label="YouTube Premium" />
            <NavigationItem icon="YouTubeMusic" label="YouTube Music" />
            <NavigationItem icon="YouTubeKids" label="YouTube Kids" />
        </NavigationSection>

        <NavigationSection>
            <NavigationItem icon="Settings" label="Settings" />
            <NavigationItem icon="Report" label="Report history" />
            <NavigationItem icon="Help" label="Help" />
            <NavigationItem icon="Feedback" label="Send feedback" />
        </NavigationSection>
    </nav>
</template>
