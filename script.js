let X = 0;
let BubbleClick = 1;
let BubbletotalClicks = 0;
let ClickBoost = 1.00;
let Bubblepopper = 0;
let BubblePopperCost = 25;
let PopperWaver1Cost = 100;
let BuoIPrice = 1e9;
let Bubblepopperbps = 0;
let PopperWaver1Bought = 0;
let Bubblespersecond = Bubblepopperbps;
let PlasmaBubbles = 0;
let LogBubbles = 0;
let BuoI = 0
let BuoIBoost = 1

function popBubble() {
  X = X + Math.round(BubbleClick * 10) / 10;
  BubbletotalClicks = BubbletotalClicks + 1;
  if (ClickBoost < 10) {
    ClickBoost = Math.floor((ClickBoost * 1000) * 1.0025285) / 1000;
  }
  if (ClickBoost >= 10) {
    ClickBoost = 10
  }
  setInterval(function() {
    document.getElementById("B").innerHTML = Math.round(X)
    document.getElementById("B").innerText = abbrNum(X,3)
    document.getElementById("BubbletotalClicks").innerText = BubbletotalClicks;
  }, 1000);
}
function buyBubblePopper() {
  if (X >= BubblePopperCost) { 
    X = X - BubblePopperCost;
    Bubblepopper = Bubblepopper + 1;
    Bubblespersecond = Math.ceil(Bubblepopperbps);
    document.getElementById("Bubblepopper").innerHTML = Bubblepopper;
    document.getElementById("Bubblepopperbps").innerHTML = Bubblepopperbps;
    document.getElementById("Bubblepopperbps").innerText = abbrNum(Bubblepopperbps,3)
    BubblePopperCost = Math.ceil(BubblePopperCost * 1.15);
    BubblePopperCost = Math.ceil(BubblePopperCost * Math.pow(1.0145, (Bubblepopper + 1)));
    document.getElementById("BubblePopperCost").innerHTML = BubblePopperCost;
    document.getElementById("BubblePopperCost").innerText = abbrNum(BubblePopperCost,3)
  }
}


 setInterval(function() {
  X = Math.round(X + ((Bubblepopperbps)));
 }, 1000);


function PopperWaver1() {
  if (X >= PopperWaver1Cost) { 
    X = X - PopperWaver1Cost;    
    PopperWaver1Cost = Math.ceil(PopperWaver1Cost * 2);
    PopperWaver1Cost = Math.ceil(PopperWaver1Cost * Math.pow(1.025, (PopperWaver1Bought + 1)));
    Bubblespersecond = Math.ceil(Bubblepopperbps);
    PopperWaver1Bought = PopperWaver1Bought + 1;
    document.getElementById("PopperWaver1Cost").innerHTML = PopperWaver1Cost;
    document.getElementById("PopperWaver1Cost").innerText = abbrNum(PopperWaver1Cost,3)
    document.getElementById("PopperWaver1Bought").innerHTML = PopperWaver1Bought;
  }  
}

function BuoyancyI() {
  if (X >= BuoIPrice) {
    X = X - 1e9;
    BuoI = 1;
    BuoIPrice = NaN;
    BuoIBoost = 10 * (Bubblepopper / 10);
  }
}
if (X > 1e12) {
  document.getElementById("LogBubbles").innerHTML = LogBubbles
}
if (X < 1e12) {
  LogBubbles = 0
}
function Bloat() {
  if (X >= 1e12) {
    X = 0
    Bubblepopper = 0
    PopperWaver1Bought = 0
    ClickBoost = 1.00
    BubblePopperCost = 25
    PopperWaver1Cost = 100
    BubbletotalClicks = 0
    BubbleClick = 1
    PlasmaBubbles = PlasmaBubbles + Math.floor(Math.pow(bubbles, 0.1))
    
  }
}

setInterval(function() {
  Bubblepopperbps= Math.floor(ClickBoost * Bubblepopper * (1 * Math.pow(1.6, PopperWaver1Bought)));
 }, 30);

setInterval(function() {
 abbrNum((BubbleClick = Math.floor(ClickBoost * BuoIBoost * (1 * Math.pow(1.8, (PopperWaver1Bought + 1))))),3);}, 30)

setInterval(function() {
  document.getElementById("BubblePopperCost").innerText = abbrNum(BubblePopperCost,3);
}, 100);
setInterval(function() {
  document.getElementById("PopperWaver1Cost").innerText = abbrNum(PopperWaver1Cost,3);
}, 100);
setInterval(function() {
  document.getElementById("bubblepopperbps").innerText = abbrNum(Bubblepopperbps,3);
}, 100);
setInterval(function() {
  document.getElementById("bubbleClick").innerText = abbrNum(BubbleClick,3);
}, 100);
setInterval(function() {
  document.getElementById("ClickBoost").innerText = ClickBoost;
}, 100);
setInterval(function() {
  document.getElementById("BuoIPrice").innerText = abbrNum(BuoIPrice,3);
}, 100);

