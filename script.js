let x = 0;
let bubbleClick = 1;
let bubbletotalClicks = 0;
let ClickBoost = 1.00;
let bubblepopper = 0;
let BubblePopperCost = 25;
let PopperWaver1Cost = 100;
let BuoIPrice = 1e9;
let bubblepopperbps = 0;
let PopperWaver1Bought = 0;
let Bubblespersecond = bubblepopperbps;
let PlasmaBubbles = 0;
let LogBubbles = 0;
let BuoI = 0
let BuoIBoost = 1

function popBubble() {
  x = x + Math.round(bubbleClick * 10) / 10;
  bubbletotalClicks = bubbletotalClicks + 1;
  if (ClickBoost < 10) {
    ClickBoost = Math.floor((ClickBoost * 1000) * 1.0025285) / 1000;
  }
  if (ClickBoost >= 10) {
    ClickBoost = 10
  }
  setInterval(function() {
    document.getElementById("B").innerHTML = Math.round(x)
    document.getElementById("B").innerText = abbrNum(x,3)
    document.getElementById("bubbletotalClicks").innerText = bubbletotalClicks;
  }, 1000);
}
function buyBubblePopper() {
  if (x >= BubblePopperCost) { 
    x = x - BubblePopperCost;
    bubblepopper = bubblepopper + 1;
    Bubblespersecond = Math.ceil(bubblepopperbps);
    document.getElementById("bubblepopper").innerHTML = bubblepopper;
    document.getElementById("bubblepopperbps").innerHTML = bubblepopperbps;
    document.getElementById("bubblepopperbps").innerText = abbrNum(bubblepopperbps,3)
    BubblePopperCost = Math.ceil(BubblePopperCost * 1.15);
    BubblePopperCost = Math.ceil(BubblePopperCost * Math.pow(1.0145, (bubblepopper + 1)));
    document.getElementById("BubblePopperCost").innerHTML = BubblePopperCost;
    document.getElementById("BubblePopperCost").innerText = abbrNum(BubblePopperCost,3)
  }
}


 setInterval(function() {
  x = Math.round(x + ((bubblepopperbps)));
 }, 1000);


function PopperWaver1() {
  if (x >= PopperWaver1Cost) { 
    x = x - PopperWaver1Cost;    
    PopperWaver1Cost = Math.ceil(PopperWaver1Cost * 2);
    PopperWaver1Cost = Math.ceil(PopperWaver1Cost * Math.pow(1.025, (PopperWaver1Bought + 1)));
    Bubblespersecond = Math.ceil(bubblepopperbps);
    PopperWaver1Bought = PopperWaver1Bought + 1;
    document.getElementById("PopperWaver1Cost").innerHTML = PopperWaver1Cost;
    document.getElementById("PopperWaver1Cost").innerText = abbrNum(PopperWaver1Cost,3)
    document.getElementById("PopperWaver1Bought").innerHTML = PopperWaver1Bought;
  }  
}

function BuoyancyI() {
  if (x >= BuoIPrice) {
    x = x - 1e9;
    BuoI = 1;
    BuoIPrice = NaN;
    BuoIBoost = 10 * (bubblepopper / 10);
  }
}
if (x > 1e12) {
  document.getElementById("LogBubbles").innerHTML = LogBubbles
}
if (x < 1e12) {
  LogBubbles = 0
}
function Bloat() {
  if (x >= 1e12) {
    x = 0
    bubblepopper = 0
    PopperWaver1Bought = 0
    ClickBoost = 1.00
    BubblePopperCost = 25
    PopperWaver1Cost = 100
    bubbletotalClicks = 0
    bubbleClick = 1
    PlasmaBubbles = PlasmaBubbles + Math.floor(Math.pow(bubbles, 0.1))
    
  }
}

setInterval(function() {
  bubblepopperbps= Math.floor(ClickBoost * bubblepopper * (1 * Math.pow(1.6, PopperWaver1Bought)));
 }, 30);

setInterval(function() {
 abbrNum((bubbleClick = Math.floor(ClickBoost * BuoIBoost * (1 * Math.pow(1.8, (PopperWaver1Bought + 1))))),3);}, 30)

setInterval(function() {
  document.getElementById("BubblePopperCost").innerText = abbrNum(BubblePopperCost,3);
}, 100);
setInterval(function() {
  document.getElementById("PopperWaver1Cost").innerText = abbrNum(PopperWaver1Cost,3);
}, 100);
setInterval(function() {
  document.getElementById("bubblepopperbps").innerText = abbrNum(bubblepopperbps,3);
}, 100);
setInterval(function() {
  document.getElementById("bubbleClick").innerText = abbrNum(bubbleClick,3);
}, 100);
setInterval(function() {
  document.getElementById("ClickBoost").innerText = ClickBoost;
}, 100);
setInterval(function() {
  document.getElementById("BuoIPrice").innerText = abbrNum(BuoIPrice,3);
}, 100);

