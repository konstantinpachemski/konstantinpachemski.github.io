
  
  app.ready(() => {
    // Listen to keys, close menu if visible
    listen(document, "keyup", e => { if (e.keyCode == app.keys.ESC) app.keys.handleESC() });
      
    listen(document, "keydown", e => {
      if (e.keyCode == app.keys.arrowUp) app.keys.handleArrowUp(e);
      else if (e.keyCode == app.keys.arrowDown) app.keys.handleArrowDown(e);
      else if (e.keyCode == app.keys.enter) app.keys.handleEnter(e);
    });
  });
  
  // Search
  app.search.visible = false;
  app.search.storageKey = "globalSearchData";
  app.ready(() => {
    var searchIcon = select(".js-search");
    if (!(searchIcon instanceof HTMLElement)) return;
  
    app.search.searchIcon = searchIcon;
    app.search.loadData();
  
    // Dispatched events
    listen(document, "app:menuDidHide", app.search.showIcon);
    listen(document, "app:menuWillShow", app.search.hideIcon);
  
    // User input
    listen(searchIcon, "click", e => !app.search.visible ? app.search.reveal(e) : app.search.hide(e));
    listen(".js-search-input", "input", e => app.search.updateForQuery(e.target.value));
  });
  
  app.search.loadData = () => {
    // Check if data already exists, if so load it instead
    const cachedData = localStorage.getItem(app.search.storageKey);
    if (cachedData) {
      const data = JSON.parse(cachedData);
      app.search.data = data["items"];
      return;
    }
  
    // If not, cache this with local storage and don't fetch on every page load
    fetch("/js/searchable.json")
      .then(response => response.json())
      .then(data => {
        localStorage.setItem(app.search.storageKey, JSON.stringify(data));
        app.search.data = data["items"];
      }).catch( err => { /* Handle error */ });
  }
  
  app.search.updateForQuery = query => {
    query = query.toLowerCase();
    let hits = [];
    // Look through all items
    for (var i = 0; i < app.search.data.length; i++) {
      // For every item, look for hits
      const entryValues = Object.values(app.search.data[i]);
      const searchString = entryValues.join(" ").toLowerCase();
      if (searchString.indexOf(query) == -1) continue;
      // Store new hit
      hits.push(app.search.data[i]);
    }
    
    app.search.renderResults(hits, query);
  }
  
  app.search.renderResults = (results, query) => {
    const searchElements = create("div.site-search-content-results-list");
  
    for (var i = 0; i < results.length; i++) {
      // Create link and add "active" if first row
      const link = create("a.site-search-results-item.js-site-search-results-item", {
          classList: i == 0 ? "site-search-results-item-active" : "",
          href: results[i]["url"],
          textContent: results[i]["title"]
        },
        create("span.site-search-results-item-desc", results[i]["description"])
      );
      searchElements.appendChild(link);
    }
    // If length is 0, add a placeholder saying you found nothing
    if (results.length == 0) {
      var noResult = create("span.site-search-results-item.site-search-results-item-message",
        'No hits for "' + query + '"'
      );
      searchElements.appendChild(noResult);
    }
    
    var results = select(".js-site-search-content-results");
    results.innerHTML = "";
    results.appendChild(searchElements);
  
    listenAll(".js-site-search-results-item", "mouseenter", e => app.search.focusItem(e.target));
  }
  
  app.menu.visible = false;
  app.ready(() => {
    app.menu.icon = select(".js-menu");
    listen(app.menu.icon, "click", e => !app.menu.visible ? app.menu.reveal(e) : app.menu.hide(e));
  });
  
  app.menu.toggleStates = () => {
    select('body').classList.toggle('no-scroll');
    app.menu.icon.classList.toggle('menu-active');
    select('.js-nav').classList.toggle('site-nav-active');
  }
  
  app.search.toggleStates = () => {
    select('body').classList.toggle('no-scroll');
    select('.js-search-overlay').classList.toggle('site-nav-active');
  }
  
  app.menu.reveal = e => {
    app.menu.visible = true;
    app.menu.toggleStates();
    dispatch("app:menuWillShow");
  
    app.overlay.show({
      position: app.clickPosition(e),
      fill: "#1f4954"
    });
  
    anime.remove('.js-nav, .js-nav-header-line, .js-nav-animate');
  
    let containerDelay = 200;
  
    animate('.js-nav', {
      opacity: [0, 1],
      delay: containerDelay,
      duration: 200,
      easing: "easeInOutExpo"
    });
  
    var menuItemDelay = 90;
    containerDelay += 75;
    select(".js-nav-header").style.opacity = 0;
    animate('.js-nav-header', {
      opacity: [0, 1],
      delay: containerDelay,
      duration: 200,
      easing: "easeInOutExpo"
    });
  
    select(".js-nav-header-line").style.transform.replace(/scale\([0-9|\.]*\)/, 'scale(0.28)');
    animate('.js-nav-header-line', {
      scale: [0.28, 1],
      delay: containerDelay,
      duration: 600,
      easing: "easeInOutExpo"
    });
    containerDelay += 350;
  
    for (let animated of selectAll(".js-nav-animate")) {
      animated.style.opacity = 0;
      animated.style.transform.replace(/scale\([0-9|\.]*\)/, 'scale(0.9)');
    }
  
    animate('.js-nav-animate', [
      { opacity: 0, scale: 0.9, translateY: '-7px' },
      { opacity: 1, scale: 1, translateY: 0 }
     ], {
       delay: (el, i) => containerDelay + menuItemDelay * (i+1),
       duration: 1100,
       easing: "easeOutExpo"
    }).then(() => dispatch('app:menuDidReveal'));
  }
  
  app.search.reveal = e => {
    app.search.toggleStates();
    app.search.visible = true;
    app.menu.hideMenuIcon();
  
    app.overlay.show({
      position: app.clickPosition(e),
      fill: "#1f4954"
    });
  
    // Hide search icon and show X
    const searchIconDuration = 400;
    const searchIconDelay = 200;
  
    // Hide Search icon
    animate('.site-search-icon', [
      { scale: 1, translateY: 0, rotate: '0deg' },
      { scale: 0, translateY: '-5px', rotate: '90deg' }
     ], {
       delay: searchIconDelay,
       duration: searchIconDuration,
       easing: "easeOutExpo"
     });
  
    // Show close icon
    animate('.site-search-close-icon', {
      scale: [0, 1],
      opacity: [0, 1],
      delay: searchIconDelay,
      duration: searchIconDuration,
      easing: "easeOutExpo",
    });
  
    animate('.site-search-close-icon-line-1', {
      rotateZ: ['45deg', '225deg'],
      delay: searchIconDelay,
      duration: searchIconDuration,
      easing: "easeOutExpo"
    });
  
    animate('.site-search-close-icon-line-2', {
      rotateZ: ['45deg', '135deg'],
      delay: searchIconDelay,
      duration: searchIconDuration,
      easing: "easeOutExpo"
    });
  
    select(".js-search-input").style.opacity = 0;
    animate('.js-search-overlay', {
      opacity: [0, 1],
      delay: 200,
      duration: 200,
      easing: "easeInOutExpo"
    });
  
    animate('.js-search-input', {
      opacity: [0, 1],
      translateX: ['25px', 0],
      delay: 400,
      duration: 700,
      easing: "easeOutExpo"
    });
  
    // Focus on input field
    select(".js-search-input").focus();
  }
  
  app.search.moveSelectionInDirection = (options) => {
    // Find index of current focus
    var activeSelection = select(".site-search-results-item-active");
    if (!activeSelection) return;
    var newSelection = options.direction === "up" ? activeSelection.previousElementSibling : activeSelection.nextElementSibling;
    // Select next item (if any)
    if (newSelection == null) return;
    activeSelection.classList.remove("site-search-results-item-active");
    newSelection.classList.add("site-search-results-item-active");
  }
  
  app.search.moveSelectionUp = () => app.search.moveSelectionInDirection({direction: "up"});
  app.search.moveSelectionDown = () => app.search.moveSelectionInDirection({direction: "down"});
  
  app.search.focusItem = (item) => {
    select(".site-search-results-item-active").classList.remove("site-search-results-item-active");
    item.classList.add("site-search-results-item-active");
  }
  
  app.search.goToSelectedItem = () => {
    const activeItem = select(".site-search-results-item-active");
    if (!activeItem) return;
    window.location.href = activeItem.href;
  }
  
  app.search.hide = () => {
    app.search.toggleStates();
    app.search.visible = false;
    const searchIconDuration = 400;
    const searchIconDelay = 200;
  
    app.overlay.hide({
      position: app.overlay.lastStartingPoint,
      fill: "#1f4954",
      complete: app.menu.showMenuIcon
    });
  
    animate('.js-search-input', {
      opacity: [1, 0],
      translateX: [0, '25px'],
      duration: 400,
      easing: "easeOutExpo"
    });
  
    animate('.js-search-overlay', {
      opacity: [1, 0],
      delay: 200,
      duration: 200,
      easing: "easeInOutExpo"
    });
  
    // Animate out the cross
    animate('.site-search-close-icon', {
      opacity: [1, 0],
      scale: [1, 0],
      delay: searchIconDelay,
      duration: searchIconDuration + 10,
      easing: "easeInOutExpo"
    });
  
    animate('.site-search-close-icon-line-1', {
      rotateZ: ['225deg', '45deg'],
      scale: [1, 0.7],
      delay: searchIconDelay,
      duration: searchIconDuration,
      easing: "easeOutExpo"
    });
  
    animate('.site-search-close-icon-line-2', {
      rotateZ: ['135deg', '45deg'],
      scale: [1, 0.7],
      delay: searchIconDelay,
      duration: searchIconDuration,
      easing: "easeOutExpo"
    });
  
    animate('.site-search-icon', [
      { translateY: '-5px', rotateZ: '90deg', scale: 0, opacity: 0 },
      { translateY: '0px', rotateZ: '0deg', scale: 1, opacity: 1 }
     ], {
       delay: searchIconDelay,
       duration: searchIconDuration,
       easing: "easeOutExpo"
    });
  }
  
  app.menu.hide = (e) => {
    app.menu.visible = false;
    app.menu.toggleStates();
    dispatch("app:menuWillHide");
  
    app.overlay.hide({
      position: app.overlay.lastStartingPoint,
      fill: "#1f4954",
      complete: () => dispatch("app:menuDidHide")
    });
  
    animate('.js-nav', {
      opacity: [1, 0],
      duration: 200,
      easing: "easeInOutExpo"
    });
  
    animate('.js-nav-header-line', {
      scale: [1, 0.5],
      duration: 300,
      easing: "easeInExpo"
    });
  
    animate('.js-nav-animate', [
      { translateY: '0px', opacity: 1, scale: 1 },
      { translateY: '10px', opacity: 0, scale: 0.9 }
     ], {
       duration: 200,
       easing: "easeInExpo"
    });
  }
  
  app.menu.hideMenuIcon = () => app.menu.icon.classList.add("menu-hidden");
  
  app.menu.showMenuIcon = () => {
    app.menu.icon.classList.remove("menu-hidden");
    animate('.menu', {
      opacity: [0, 1],
      duration: 500,
      easing: 'easeOutQuart'
    });
  }
  
  app.search.hideIcon = () => {
    if (!app.search.searchIcon) return;
    app.search.searchIcon.classList.add("menu-hidden");
  }
  
  app.search.showIcon = () => {
    if (!app.search.searchIcon) return;
    app.search.searchIcon.classList.remove("menu-hidden");
    animate('.js-search', {
      opacity: [0, 1],
      duration: 500,
      easing: 'easeOutQuart'
    });
  }
  
  app.keys.handleESC = () => {
    dispatch("pressed:ESC");
    if (app.menu.visible) app.menu.hide()
    if (app.search.visible) app.search.hide();
  }
  
  app.animations.track = (animeTimeline, el) => {
    const animationObserver = new IntersectionObserver((entries, observer) => {
      entries[0].isIntersecting ? animeTimeline.play() : animeTimeline.pause();
    }, { rootMargin: '-5px 0px' });
    animationObserver.observe(el);
  }
  
  app.ready(() => {
    app.overlay.c = select(".site-nav-canvas");
    app.overlay.ctx = app.overlay.c.getContext("2d");
    // app.overlay.cH;
    // app.overlay.cW;
    app.overlay.bgColor = "transparent";
    app.overlay.resizeCanvas();
    app.overlay.lastStartingPoint = {x: 0, y: 0};
  
    listen(window, "resize", app.overlay.resizeCanvas);
  });
  
  app.overlay.resizeCanvas = function() {
    app.overlay.cW = window.innerWidth;
    app.overlay.cH = window.innerHeight;
    app.overlay.c.width = app.overlay.cW * window.devicePixelRatio;
    app.overlay.c.height = app.overlay.cH * window.devicePixelRatio;
    app.overlay.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    app.overlay.ctx.fillStyle = app.overlay.bgColor;
    app.overlay.ctx.fillRect(0, 0, app.overlay.cW, app.overlay.cH);
  }
  
  app.overlay.show = options => {
    app.overlay.c.style.display = "block";
    app.overlay.lastStartingPoint = options.position;
  
    options.targetRadius = app.overlay.calcPageFillRadius(options.position.x, options.position.y);
    options.startRadius = 0;
    options.easing = "easeOutQuart";
    app.overlay.animate(options);
  }
  
  // Hide the overlay. Args:
  // fill: color to animate with
  // position: position to target as the circle shrinks
  // complete: completion callback
  app.overlay.hide = options => {
    options.targetRadius = 0;
    options.easing = "easeInOutQuart";
  
    const callback = options.complete;
    options.complete = () => { 
      app.overlay.c.style.display = "none";
      app.overlay.bgColor = "transparent";
      if (callback) callback();
    };
  
    options.startRadius = app.overlay.calcPageFillRadius(options.position.x, options.position.y);
    app.overlay.animate(options);
  }
  
  // Animate from one size to another. Args:
  // position: {x, y}
  // fill: "color" 
  // startRadius: number
  // targetRadius: number
  // complete: callback method
  app.overlay.animate = (options) => {
    const minCoverDuration = 750;
    app.overlay.bgColor = options.fill;
    
    app.overlay.circle.x = options.position.x;
    app.overlay.circle.y = options.position.y;
    app.overlay.circle.r = options.startRadius;
    app.overlay.circle.fill = options.fill;
  
    anime.remove(app.overlay.circle)
  
    anime({
      targets: app.overlay.circle,
      r: options.targetRadius,
      duration:  Math.max(options.targetRadius/2, minCoverDuration),
      easing: options.easing,
      complete: options.complete ? options.complete : null,
      update: () => app.overlay.circle.draw({
        startRadius: options.startRadius,
        targetRadius: options.targetRadius
      })
    });
  }
  
  app.overlay.calcPageFillRadius = function(x, y) {
    var l = Math.max(x - 0, app.overlay.cW - x);
    var h = Math.max(y - 0, app.overlay.cH - y);
    return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
  }
  
  app.clickPosition = (e) => {
    if (e.touches) e = e.touches[0];
  
    if (e.clientX && e.clientY) return {
      x: e.clientX, 
      y: e.clientY
    }
  
    // If there was no clientX and Y set, use the center position of
    // the target as a backup
    var rect = e.target.getBoundingClientRect();
    return {
      x: rect.top + (rect.bottom - rect.top)/2,
      y: rect.left + (rect.right - rect.left)/2
    }
  }
  
  app.overlay.circle = {};
  
  app.overlay.circle.draw = function(options) {
    if (options.targetRadius < options.startRadius) {
      app.overlay.ctx.clearRect(0,0, app.overlay.cW, app.overlay.cH);
    }
  
    app.overlay.ctx.beginPath();
    app.overlay.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    app.overlay.ctx.fillStyle = this.fill;
    app.overlay.ctx.fill();
    app.overlay.ctx.closePath();
  }

  
  var ml = {};
ml.timelines = {};
ml.overlay = {};
ml.isShowingSource = false;

app.ready(() => {
  listenAll(".composition-wrapper", "click", e => {
    ml.showComposition(e.currentTarget, e);
  });

  listen(".composition-back-button", "click", e => {
    e.preventDefault();
    ml.hideSource();
  });

  listen(".header-title", "click", ml.animateHeader);
  listen(window, "scroll", ml.onlyPlayVisible);
  listen(window, "resize", ml.onlyPlayVisible);
  listen(window, "resize", ml.overlay.resizeCanvas);
  listen(document, "app:menuDidReveal", ml.pauseAllCompositions);
  listen(document, "app:menuWillHide", ml.onlyPlayVisible);
  listen(document, "app:menuDidHide", ml.onlyPlayVisible);
  listen(document, "pressed:ESC", ml.hideSource);

  ml.compositions = selectAll(".composition");
  ml.ad = select(".ml-carbon-ad");
  const header = select('.header-title');
  header.innerHTML = header.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  ml.onlyPlayVisible();
  ml.loadCompositionFromCurrentHash();
});

ml.onlyPlayVisible = function() {
  // Don't play if any overlays are playing
  if (ml.isShowingSource || app.menu.visible) return;
  ml.compositions.forEach(function(element, i) {
    ml.compShouldPlay(element) ? ml.playComposition(element) : ml.pauseComposition(element);
  });
}

ml.compShouldPlay = function(comp) {
  var winHeight = window.innerHeight;
  var bounds = comp.getBoundingClientRect();
  var offset = 180; // Greater offset -> comps will play less often

  // Check if bottom of comp is above view or if top of comp is below view
  if (bounds.bottom < 0+offset || bounds.top > winHeight-offset) return false;
  // Default to true
  return true;
}

ml.playComposition = function(comp) {
  var compID = comp.querySelector("h1").className;
  ml.timelines[compID].play();
}

ml.restartComposition = function(comp) {
  var compID = comp.querySelector("h1").className;
  ml.timelines[compID].restart();
}

ml.pauseComposition = function(comp) {
  var compID = comp.querySelector("h1").className;
  ml.timelines[compID].pause();
}

ml.pauseAllCompositions = function() {
  ml.compositions.forEach(function(element, i) {
    ml.pauseComposition(element);
  });
}

// Displaying compositions
ml.showComposition = function(comp, e) {
  if (comp.classList.contains("composition-active")) return;
  ml.prepareSourceForComposition(comp.parentElement);
  ml.showSourceForComposition(comp, e);
}

ml.prepareSourceForComposition = function(comp) {
  var compNumber = ml.getElementIndex(comp) + 1;
  select(".composition-source-header").textContent = "Effect " + compNumber;

  // Set html
  var html = comp.querySelector(".composition-static-html").innerHTML;
  html = ml.prependHTMLwithJS(html.trim());
  select(".composition-source-code-html").innerHTML = html;

  // Set CSS
  var css = comp.querySelector("style").innerHTML;
  select(".composition-source-code-css").textContent = css.trim();

  // Set javascript
  var script = comp.querySelector("script").innerHTML;
  script = ml.removeInternalJSFromCode(script);
  select(".composition-source-code-js").textContent = script.trim();
}

ml.prependHTMLwithJS = function(html) {
  var cdn = "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js";
  var scriptTag = '<script src="' + cdn + '"></script>';
  var scripts = ml.escapeHTML(scriptTag);

  return html + "\n\n" + scripts;
}

ml.escapeHTML = function(html) {
  var text = document.createTextNode(html);
  var div = document.createElement('div');
  div.appendChild(text);

  return div.innerHTML;
}

ml.removeInternalJSFromCode = function(code) {
  // Remove the line where it's stored in ML for pausing/playing
  var startPosition = code.indexOf("ml.timelines[");
  var endPosition = code.indexOf("anime.timeline(");

  return code.slice(0, startPosition) + code.slice(endPosition, code.length);
}

ml.showSourceForComposition = function(c, e) {
  ml.isShowingSource = true;

  select("html").classList.add("is-showing-source");
  c.classList.add("composition-active");
  ml.pauseAllCompositions();
  ml.updateHashForComposition(c);

  // Play chosen composition from beginning
  ml.restartComposition(c);
  ml.pauseComposition(c);
  app.menu.hideMenuIcon();
  var spawnPosition = ml.spawnPositionForEventAndComp(e, c);
  app.overlay.show({
    position: spawnPosition,
    fill: "#" + c.dataset.color
  });

  // Prepare to animate in overlay elements
  select(".composition-back-button").style.opacity = 0;
  select(".composition-back-button").style.display = "block";
  select(".composition-source-text").style.opacity = 0;
  select(".composition-source").style.display = "block";
  select(".composition-source-container").style.transform = "scaleX(0)";
  select(".composition-source-container").style.display = "block";

  // Animate in overlay elements
  anime.timeline()
  .add({
    targets: ".composition-source-container",
    scaleX: [0, 1],
    duration: 900,
    delay: 500,
    easing: "easeOutExpo",
    complete: () => ml.playComposition(c)
  }).add({
    targets: ".composition-source-text",
    opacity: [0,1],
    translateY: [-50, 0],
    delay: (el, i) => 50 * i,
    easing: "easeOutExpo",
    offset: "-=150"
  }).add({
    targets: ml.ad,
    opacity: [0,1],
    easing: "easeOutExpo",
    offset: "-=1250"
  });

  anime({
    targets: ".composition-back-button",
    opacity: [0,1],
    easing: "easeOutExpo",
    scale: [0.8, 1],
    delay: 300,
    translateX: [-40, 0]
  });
}

ml.hideSource = function() {
  if (!ml.isShowingSource) return;
  ml.isShowingSource = false;
  ml.resetHash();

  ml.ad.classList.remove("ml-carbon-ad-source-showing");
  ml.refreshAd();

  select("html").classList.remove("is-showing-source");
  ml.onlyPlayVisible();
  select(".composition-active").classList.remove("composition-active");
  
  app.overlay.hide({
    position: app.overlay.lastStartingPoint,
    fill: app.overlay.bgColor
  });

  anime({
    targets: ".composition-source-text",
    opacity: 0,
    duration: 400,
    easing: "easeInQuad"
  });

  anime({
    targets: ".composition-source-container",
    translateX: "100%",
    duration: 500,
    easing: "easeInQuad",
    complete: function() {
      // Reset scroll position (could have changed if you opened before and scrolled)
      var comp = select(".composition-source");
      comp.scrollTop = 0;
      comp.style.display = "none";
    }
  });

  anime({
    targets: ".composition-back-button",
    opacity: [1,0],
    easing: "easeInQuad",
    translateX: [0, -40],
    scale: [1, 0.8],
    duration: 300,
    complete: function() {
      select(".composition-back-button").style.display = "none";
      app.menu.showMenuIcon();
    }
  });
}

ml.updateHashForComposition = function(c) {
  window.location.hash = ml.getElementIndex(c.parentElement) + 1;
}

ml.getElementIndex = function(node) {
  var index = 0;
  while ( (node = node.previousElementSibling) ) { index++; }
  return index;
}

ml.resetHash = function() {
    window.history.pushState("", document.title, window.location.pathname + window.location.search);
}

ml.loadCompositionFromCurrentHash = function() {
    var hash = window.location.hash;
    if (hash == "") return;

    ml.loadCompositionForHash(hash);
}

ml.loadCompositionForHash = function(hash) {
  var ID = parseInt(hash.substr(1,2));
  var comp = selectAll(".composition")[ID-1];
  var rect = comp.getBoundingClientRect();
  document.scrollTop = rect.top;
  ml.showComposition(comp.querySelector(".composition-wrapper"), {}, { refreshAd: false });
}

ml.spawnPositionForEventAndComp = (e, comp) => {
  if (e.touches) e = e.touches[0];

  return {
    x: e.clientX ? e.clientX : ml.horizontalCenterForElement(comp.parentElement),
    y: e.clientY ? e.clientY : ml.verticalCenterForElement(comp.parentElement)
  };
}

ml.horizontalCenterForElement = function(element) {
  var rect = element.getBoundingClientRect();
  return rect.left + rect.width / 2;
}

ml.verticalCenterForElement = function(element) {
  var rect = element.getBoundingClientRect();

  return rect.top + rect.height / 2 + 50;
}


  