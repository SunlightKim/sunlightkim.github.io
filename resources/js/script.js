// Discord Icon Copy Username
const discordIcon = document.getElementById('discord');
const discordTooltip = document.getElementById('discord-tooltip');
let clicks = 0;

/* When the user clicks on the icon, some messages
will be displayed on the tooltip.
Eg: 1 click: "Copied!"
    2 clicks: "Copied again!"
    3 clicks: "Copied again and again!"
    4 clicks: "Copied once more!"
    5 clicks: "You got it!"
    6 clicks: "DOOMSDAY!"
    7 clicks: "You're a copycat!"
    8 clicks: "Please stop!"
    9 clicks: "I'm tired of this!"
    10 clicks: "Okay! Okay! I get it!"
    11 clicks: "I'm done! Here you go, see you later!" => leads to secret page 'resources/maytheforcethbewithyou.html'
*/
discordIcon.addEventListener('click', () => {
    clicks++;
    const discordUsername = "Metzeral#1102";
    navigator.clipboard.writeText(discordUsername);
    discordIcon.classList.add('copied');
    if (clicks <= 11) {
        discordTooltip.textContent = getCopyText(clicks);
    } else {
        window.location.href = "resources/maytheforcebewithyou.html";
    }
    discordTooltip.classList.add('copied');
    setTimeout(() => {
        discordIcon.classList.remove('copied');
        discordTooltip.classList.remove('copied');
    }, 2000);
});

function getCopyText(clicks) {
    switch (clicks) {
        case 1:
            return "Copied!";
        case 2:
            return "Copied again!";
        case 3:
            return "Copied again and again!";
        case 4:
            return "Copied once more!";
        case 5:
            return "You got it!";
        case 6:
            return "DOOMSDAY!";
        case 7:
            return "You're a copycat!";
        case 8:
            return "Please stop!";
        case 9:
            return "I'm tired of this!";
        case 10:
            return "Okay! Okay! I get it!";
        case 11:
            return "I'm done! Here you go, see you later!";
        default:
            return "";
    }
}