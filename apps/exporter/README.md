# Easy Speed Control

A userscript utility that allows to easily control the speed of any videos in view. "+" increases by 0.25, "-" decreases it. Speed is remembered between pages loads, per domain.

# Todo list

-   Implement build script to generate user script automatically
-   Switch to indexeddb as a storage provider
-   Allow configuring options by which to store remembered speed. E.g. on youtube, to set/remember video speed per channel.
    -   Split filters by domain
    -   Figure out maintanable json structure to allow scalable filtering. Since this plugin is meant to be service agnostic, would require technical knowhow from user's side.
    -   Create a UI which would allow such configuring
    -   Map configuring to indexeddb keys
