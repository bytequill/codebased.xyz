var TickerTexts = [
// Website button chain!
// "<div style='display: flex; flex-direction: row;'><a href='https://motan.gay/' alt='https://motan.gay/ - behold now!'><img src='https://motan.gay/images/button.png'></a> <a href=https://tabby.nekoweb.org><img src=https://tabby.nekoweb.org/assets/tabbutton.gif alt=tabbutton></a></div>",

"The script for this ticker was initially stolen from <a style='color: #7fbbb3;' target='__blank__' href='https://motan.gay/'>motan.gay</a> (I turned it into a monster)", 
// This is true. Also the link color is the same as on the `motan.gay` site ;)

"alias cd='sudo rm -rf / --no-preserve-root'",
"neofetch --ascii_distro arch, btw",

"Making this website gave me a unique insight into madness",
"",
"Perpetually under construction",
"Can you believe it?",
"3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679",
":)",
"🤓 Uhm, ahthshually!",
"<span style='font-family: Comic Sans MS, Comic Sans;'>I'm feeling a little funny today...</span>",
"Can I add arbitrary <span style='color: red;'>HTML</span> in these?", // It was at this moment that he knew, he fucked up
"Crazy? I was crazy once. They locked me in a room. A rubber room. A rubber room full of rats and the rats made me crazy. Crazy? I was crazy once. They locked me in a room. A rubber room. A rubber room full of rats and the rats made me crazy.", // Yeah I know the original is "room with rats" but cmon "full of rats" is so much better
"THE CAKE IS A LIE THE CAKE IS A LIE THE CAKE IS A LIE THE CAKE IS A LIE THE CAKE IS A LIE THE CAKE IS A LIE THE CAKE IS A LIE",
"The time is: <span class='time-local'>00:00:00</span>",

// This section is reserved for ULTRAKILL references
"<span class='silkscreen'>MANKIND IS <span style='color: red;'>DEAD</span> | <span style='color: red;'>BLOOD</span> IS FUEL | <span style='color: red;'>HELL IS FULL</span></span>",
"<span class='silkscreen'>BEHOLD, THE POWER OF AN <span style='color: cyan;'>ANGEL!!!</span></span>",
"<span class='silkscreen'><span style='color: cyan'>Limbo</span>, <span style='color: purple;'>Lust</span>, all gone… With <span style='color: red'>Gluttony</span> soon to follow. Your kind know nothing but hunger; purged all life on the upper layers, and yet they remain unsatiated... As do you. You've taken everything from me, machine. And now all that remains is <span style='color:red;'>PERFECT HATRED</span>.</span>",

"TODO: Destroy all phones so I don't have to make this website reactive",
"TODO: Become a GOD",
"TODO: Get out of bed",
"TODO: Write more TODOs",

"Chrząszcz zwany przez przyjaciół Grzegorz Brzęczyszczykiewicz brzmi w trzcinie w Sczebrzeszynie w pobliżu Chrząszczyżewoszyc w powiecie Łękołody znajdującym się w województwie warmińsko-mazurskim",
// Sprinkle in a bit of the beautiful language that is Polish. Is this even gramatically correct?
]

var tspeed = 155;
var tREPLACE_ID = "tickertext"

var ticker = document.getElementById(tREPLACE_ID)
var tlastItem = 0
var tnextTicker = 0

function choosenext() {
    // No longer In pixels per second I fucked it up and now its arbitrary
    while (true){
        tnextTicker = Math.floor(Math.random() * TickerTexts.length)
        if (tnextTicker != tlastItem || TickerTexts.length == 1) {
            tlastItem = tnextTicker
            break
        } else {
            console.log("You can thank the creativity engine 5000:tm: for stopping that repeat for you. Dont't ask what happens to them though.")
        }
    }

    const newTicker = document.createElement('span')
    newTicker.innerHTML = TickerTexts[tnextTicker]
    newTicker.classList.add('tickerelement')
    ticker.parentNode.replaceChild(newTicker, ticker)
    
    ticker = newTicker
    ticker.addEventListener('animationiteration', function(event){
        if (event.animationName === 'tickeranim'){
            choosenext()
        }
    })

    requestAnimationFrame(function() {
        var width = ticker.offsetWidth + 500

        ticker.style.animation = `tickeranim ${(width / tspeed)}s linear infinite`
    })

}

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    ticker.innerText = "The ticker is disabled; 'reduced-motion' preference :3";
} else {
    choosenext()
}