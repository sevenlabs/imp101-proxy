Config = {}; // Don't touch

Config.ServerIP = "fivem.impulse101.cc";

// Social media buttons on the left side
Config.Socials = [
    {name: "discord", label: "Discord", description: "Click here to copy the link and join our Discord server!", icon: "assets/media/icons/discord.png", link: "https://impulse101.cc/discord"},
    {name: "youtube", label: "Youtube", description: "Our YouTube content. (coming soon)", icon: "assets/media/icons/youtube.png", link: "#"},
    {name: "tebex", label: "Donations", description: "For donations, feel free to look at the room - #donations at Discord.", icon: "assets/media/icons/tebex.png", link: "#"}
];

Config.HideoverlayKeybind = 112 // JS key code https://keycode.info
Config.CustomBindText = "F1"; // leave as "" if you don't want the bind text in html to be statically set

// Staff list
Config.Staff = [
    {name: "Nano", description: "Owner", color: "#ff0000", image: "https://sevenlabs.github.io/imp101-proxy/assets/img/staff/nano.jpg"},
    {name: "Ryan", description: "Developer", color: "#ff0000", image: "https://sevenlabs.github.io/imp101-proxy/assets/img/staff/1.png"},
    {name: "Jakester", description: "Management", color: "#ff0000", image: "https://sevenlabs.github.io/imp101-proxy/assets/img/staff/jakester.png"},
    {name: "UnknownGhostGirl", description: "Management", color: "#ff0000", image: "https://sevenlabs.github.io/imp101-proxy/assets/img/staff/ghostgirl.png"},
    {name: "GlizzyGunther", description: "Admin", color: "#ff0000", image: "https://sevenlabs.github.io/imp101-proxy/assets/img/staff/1.png"},
    {name: "Kasper", description: "Developer", color: "#ff0000", image: "https://sevenlabs.github.io/imp101-proxy/assets/img/staff/kasper.gif"}
];

// Mods list
Config.Mods = [
    {name: "legion", description: "Legion Summer Theme", color: "#ff0000", image: "https://sevenlabs.github.io/imp101-proxy/assets/img/none.png"},
    {name: "legionpark", description: "Legion Parking Lot", color: "#ff0000", image: "https://sevenlabs.github.io/imp101-proxy/assets/img/none.png"},
    {name: "zombies", description: "Zombies 2.0", color: "#ff0000", image: "https://sevenlabs.github.io/imp101-proxy/assets/img/none.png"},
];

// Categories
Config.Categories = [
    {label: "Social Media", default: false},
    {label: "Staff", default: true},
    {label: "Mods", default: false}
];

// Music
Config.Song = "song.mp3";