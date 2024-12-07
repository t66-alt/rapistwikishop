/*
        ███╗   ██╗██╗ ██████╗ ██╗  ██╗████████╗██╗   ██╗
        ████╗  ██║██║██╔════╝ ██║  ██║╚══██╔══╝╚██╗ ██╔╝
        ██╔██╗ ██║██║██║  ███╗███████║   ██║    ╚████╔╝ 
        ██║╚██╗██║██║██║   ██║██╔══██║   ██║     ╚██╔╝  
        ██║ ╚████║██║╚██████╔╝██║  ██║   ██║      ██║   
        ╚═╝  ╚═══╝╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝      ╚═╝   
*/
(function ($) {
  "use strict";
  var $bgSection = $(".bg-section");
  $bgSection.each(function () {
    var bgSrc = $(this).children("img").attr("src");
    var bgUrl = "url(" + bgSrc + ")";
    $(this).parent().css("backgroundImage", bgUrl);
    $(this).parent().addClass("bg-section");
    $(this).remove();
  });
  var $navAffix = $(".header-fixed .navbar-fixed-top");
  $navAffix.affix({
    offset: {
      top: 50,
    },
  });
  $(".mailchimp").ajaxChimp({
    url: "http://wplly.us5.list-manage.com/subscribe/post?u=91b69df995c1c90e1de2f6497&id=aa0f2ab5fa",
    callback: chimpCallback,
  });

  function chimpCallback(resp) {
    if (resp.result === "success") {
      $(".subscribe-alert")
        .html('<h5 class="alert alert-success">' + resp.msg + "</h5>")
        .fadeIn(1000);
    } else if (resp.result === "error") {
      $(".subscribe-alert")
        .html('<h5 class="alert alert-danger">' + resp.msg + "</h5>")
        .fadeIn(1000);
    }
  }
  $("#campaignmonitor").submit(function (e) {
    e.preventDefault();
    $.getJSON(
      this.action + "?callback=?",
      $(this).serialize(),
      function (data) {
        if (data.Status === 400) {
          alert("Error: " + data.Message);
        } else {
          alert("Success: " + data.Message);
        }
      }
    );
  });
  $(".carousel").each(function () {
    var $Carousel = $(this);
    $Carousel.owlCarousel({
      loop: $Carousel.data("loop"),
      autoplay: $Carousel.data("autoplay"),
      margin: $Carousel.data("space"),
      nav: $Carousel.data("nav"),
      dots: $Carousel.data("dots"),
      dotsSpeed: $Carousel.data("speed"),
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: $Carousel.data("slide-res"),
        },
        1000: {
          items: $Carousel.data("slide"),
        },
      },
    });
  });
  var $Ascroll = $('a[data-scroll="scrollTo"]');
  $Ascroll.on("click", function (event) {
    var target = $($(this).attr("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 100,
        },
        750
      );
    }
  });
  var $section = $(".section"),
    $bodyScroll = $(".body-scroll");
  if ($bodyScroll.length > 0) {
    $(window).on("scroll", function () {
      $section.each(function () {
        var sectionID = $(this).attr("id"),
          sectionTop = $(this).offset().top - 100,
          sectionHight = $(this).outerHeight(),
          wScroll = $(window).scrollTop(),
          $navHref = $("a[href='#" + sectionID + "']"),
          $nav = $(".nav-split").find($navHref).parent();
        if (
          wScroll > sectionTop - 1 &&
          wScroll < sectionTop + sectionHight - 1
        ) {
          $nav.addClass("active");
          $nav.siblings().removeClass("active");
        }
      });
    });
  }
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 50,
    mobile: false,
    live: true,
  });
  wow.init();
  var $portfolioFilter = $(".portfolio-filter"),
    portfolioLength = $portfolioFilter.length,
    protfolioFinder = $portfolioFilter.find("a"),
    $portfolioAll = $("#portfolio-all");
  protfolioFinder.on("click", function (e) {
    e.preventDefault();
    $portfolioFilter.find("a.active-filter").removeClass("active-filter");
    $(this).addClass("active-filter");
  });
  if (portfolioLength > 0) {
    $portfolioAll.imagesLoaded().progress(function () {
      $portfolioAll.isotope({
        filter: "*",
        animationOptions: {
          duration: 750,
          itemSelector: ".portfolio-item",
          easing: "linear",
          queue: false,
        },
      });
    });
  }
  protfolioFinder.on("click", function (e) {
    e.preventDefault();
    var $selector = $(this).attr("data-filter");
    $portfolioAll.imagesLoaded().progress(function () {
      $portfolioAll.isotope({
        filter: $selector,
        animationOptions: {
          duration: 750,
          itemSelector: ".portfolio-item",
          easing: "linear",
          queue: false,
        },
      });
      return false;
    });
  });
  $(".bg-ytvideo").each(function () {
    var vidId = $(this).data("vid-id"),
      vidAutoPlay = $(this).data("autoplay"),
      vidStartAt = $(this).data("start-at"),
      vidMute = $(this).data("mute"),
      vidOpacity = $(this).data("opacity"),
      vidShowPluginLogo = $(this).data("plugin-logo"),
      vidShowControls = $(this).data("controls"),
      vidFallBackImg = $(this).data("fall-cover");
    if (
      vidAutoPlay === "" ||
      vidAutoPlay === null ||
      vidAutoPlay === undefined
    ) {
      vidAutoPlay = true;
    }
    if (vidStartAt === "" || vidStartAt === null || vidStartAt === undefined) {
      vidStartAt = 0;
    }
    if (vidMute === "" || vidMute === null || vidMute === undefined) {
      vidMute = true;
    }
    if (vidOpacity === "" || vidOpacity === null || vidOpacity === undefined) {
      vidOpacity = 1;
    }
    if (
      vidShowPluginLogo === "" ||
      vidShowPluginLogo === null ||
      vidShowPluginLogo === undefined
    ) {
      vidShowPluginLogo = false;
    }
    if (
      vidShowControls === "" ||
      vidShowControls === null ||
      vidShowControls === undefined
    ) {
      vidShowControls = false;
    }
    if (
      vidFallBackImg === "" ||
      vidFallBackImg === null ||
      vidFallBackImg === undefined
    ) {
      vidFallBackImg = "";
    }
    $(this).data(
      "property",
      "{videoURL:'http://youtu.be/" +
        vidId +
        "',containment:'self',autoPlay:" +
        vidAutoPlay +
        ", mute:" +
        vidMute +
        ", startAt:" +
        vidStartAt +
        ", opacity:" +
        vidOpacity +
        ",showYTLogo:" +
        vidShowPluginLogo +
        ",showControls:" +
        vidShowControls +
        ",stopMovieOnBlur:false,mobileFallbackImage:'" +
        vidFallBackImg +
        "'}"
    );
  });
  $(".bg-ytvideo").mb_YTPlayer();
  var $gearCheck = $(".gear-check"),
    $colorOption = $(".color-options"),
    $colorOptionUl = $(".color-options ul li");
  $gearCheck.on("click", function () {
    $colorOption.toggle();
  });
  $colorOptionUl
    .eq(0)
    .css("backgroundColor", "#2196f3")
    .end()
    .eq(1)
    .css("backgroundColor", "#ff5722")
    .end()
    .eq(2)
    .css("backgroundColor", "#512da8")
    .end()
    .eq(3)
    .css("backgroundColor", "#222222")
    .end()
    .eq(4)
    .css("backgroundColor", "#859596")
    .end()
    .eq(5)
    .css("backgroundColor", "#1abc9c")
    .end()
    .eq(6)
    .css("backgroundColor", "#3498db")
    .end()
    .eq(7)
    .css("backgroundColor", "#27ae60")
    .end()
    .eq(8)
    .css("backgroundColor", "#f39c12")
    .end()
    .eq(9)
    .css("backgroundColor", "#d2527f")
    .end()
    .eq(10)
    .css("backgroundColor", "#8e44ad")
    .end()
    .eq(11)
    .css("backgroundColor", "#c0392b")
    .end();
  $colorOptionUl.on("click", function () {
    $("link[href*='theme']").attr("href", $(this).attr("data-value"));
  });
})(jQuery);

function SellixEmbed(product) {
  var e = document.createElement("div");
  e.setAttribute("id", "sellix-container"),
    document.getElementsByTagName("body")[0].appendChild(e),
    setTimeout(function e(t) {
      console.log("Sellix Product ID: ", product);
      for (var t, n = product, l = "?", i = 0, o = 1, a = o.length; i < a; i++)
        (t = o[i]).nodeName.indexOf("data-sellix-custom") > -1 &&
          (l +=
            t.nodeName.replace("data-sellix-custom-", "") +
            "=" +
            t.nodeValue +
            "&");
      var r,
        d = "https://embed.sellix.io/product/" + n + l,
        s =
          '<div class="sellix-fallback-button-container"><a class="sellix-fallback-button" href="' +
          d +
          '" target="_blank" >Go to product</a></div>';
      (r = document.createElement("div")).setAttribute(
        "id",
        "sellix-modal-" + n
      ),
        r.setAttribute(
          "style",
          "display:none; position:fixed; top: 0; left:0; width: 100%; height:100%; z-index:-1050"
        ),
        (r.innerHTML =
          '<div id="backdrop" class="sellix-backdrop"></div><style>.sellix-iframe {\n    width:100%;\n    height:100%;\n    border:none;\n}\n\n.sellix-iframe-content {\n    height: 100%;\n}\n\n.sellix-iframe-wrapper {\n    top:20px;\n    margin:auto;\n    width: 100%;\n    height:100%;\n    z-index: 1;\n}\n\n.sellix-iframe-loader-container {\n    z-index: 1;\n    position: absolute;\n    top: 30%;\n    left: 50%;\n    transform: translate(-50%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.sellix-backdrop {\n    background: #00000075;\n    backdrop-filter: blur(3px);\n    width:100%;\n    height:100%;\n    position:absolute;\n}\n\n.sellix-fallback-button {\n    font-family: "Open Sans";\n    font-size: 14px;\n    font-weight: 600;\n    color: white;\n    text-decoration: none;\n}\n\n.sellix-fallback-button-container {\n    position: absolute;\n    z-index: 2;\n    display: none;\n    top: 50%;\n    height: 50px;\n    line-height: 40px;\n    max-height: 50px;\n    box-sizing: border-box;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: #613bea;\n    padding: .375rem .75rem;\n    border-radius: 3px;\n}</style><div class="sellix-iframe-loader-container"><img src="https://cdn.sellix.io/static/logo/single.svg" alt="Loader" class="sellix-iframe-loader" style="width: 35px;" /></div>' +
          s +
          '<div class="sellix-iframe-wrapper"><div class="sellix-iframe-content"><iframe scrolling="auto" src="' +
          d +
          '" class="sellix-iframe" id="sellix-iframe" onerror="(e) => console.log(e)"></div></div>'),
        document.getElementById("sellix-container").appendChild(r),
        ((r = document.getElementById("sellix-modal-" + n)).style.display =
          "flex"),
        (r.style.zIndex = "99999"),
        document
          .querySelector("#sellix-iframe")
          .addEventListener("load", function (e) {
            document.querySelector(".sellix-iframe-loader").style.display =
              "none";
          }),
        document
          .querySelector("#sellix-iframe")
          .addEventListener("error", function (e) {
            (document.querySelector(".sellix-iframe-loader").style.display =
              "none"),
              (document.querySelector(
                ".sellix-fallback-button-container"
              ).style.display = "flex");
          }),
        window.addEventListener(
          "message",
          function (e) {
            "close-embed" == e.data &&
              ((r.style.display = "none"),
              (r.style.zIndex = "-1050"),
              r.parentNode.removeChild(r)),
              console.log(e);
          },
          !1
        );
    });
}

async function Resell() {
  setTimeout(() => {
    const selectEl = document.querySelector(".swal2-select");
    if (!selectEl) return;

    const optGroupOfficial = document.createElement("optgroup");
    optGroupOfficial.label = "$10 - Official Shop";
    selectEl.append(optGroupOfficial);

    const optGroupResellers = document.createElement("optgroup");
    optGroupResellers.label = "From $11 - Resellers";
    selectEl.append(optGroupResellers);

    const allOptionEls = Array.from(selectEl.children);

    function moveEl(el, group) {
      const cloned = el.cloneNode(true);
      group.append(cloned);
      el.remove();
    }

    for (const option of allOptionEls) {
      if (option.disabled || option.tagName !== "OPTION") continue;

      if (option.value.toLowerCase().startsWith("nighty"))
        moveEl(option, optGroupOfficial);
      else moveEl(option, optGroupResellers);
    }
  }, 100);

  var resellers_data = {
    RevUnity: {
      invite: "https://revunity.com/discord",
      image_url: "assets/images/resellers-dialog/rev.png",
      payment_methods:
        "Credit/Debit card, Apple Pay, GooglePay, WeChat Pay, AliPay, CashApp",
      url: "https://revunity.com/product/nighty-selfbot/",
      price: {
        value: "11",
        currency: "$",
      },
      discord: true,
      guilded: false,
      sellix: false,
    },
    Josmods: {
      invite: "https://discord.com/invite/rXuAVx7E3E",
      image_url: "https://i.imgur.com/5TWIiP7.png",
      payment_methods:
        "Debit/Credit card, Google Pay, CashApp, German Paysafecard/Amazon giftcard, Venmo",
      url: "https://josmods.shop/product/nighty-selfbot/",
      price: {
        value: 11,
        currency: "$",
      },
      discord: true,
      guilded: false,
      sellix: false,
    },
    "SpaceKeys.one": {
      invite: "https://discord.gg/AegWAdB2ma",
      image_url: "https://i.imgur.com/YyALwOF.png",
      payment_methods: "Gift Cards, PaySafeCard",
      url: "https://discord.com/invite/AegWAdB2ma",
      price: {
        value: 11,
        currency: "€",
      },
      discord: true,
      guilded: false,
      sellix: false,
    },
    "nshout.store": {
      invite: "https://nshout.store/index.php?/store/product/1-nighty-selfbot/",
      image_url: "assets/images/resellers-dialog/nshout.png",
      payment_methods:
        "Credit/Debit cards, Apple Pay, Google Pay, PayPal, Crypto via Coinbase",
      url: "https://nshout.store/index.php?/store/product/1-nighty-selfbot/",
      price: {
        value: "11",
        currency: "$",
      },
      discord: false,
      guilded: false,
      sellix: false,
    },
    ezMod: {
      invite: "https://ezmod.vip/discord",
      image_url: "https://i.imgur.com/MXlYKED.png",
      payment_methods:
        "Credit/Debit Card, Google/Apple Pay, WeChat Pay, Alipay",
      url: "https://ezmod.vip/product/nighty-selfbot/",
      price: {
        value: "11",
        currency: "$",
      },
      discord: true,
      guilded: false,
      sellix: false,
    },
    "CT Market": {
      invite: "https://discord.gg/MT9paamfTh",
      image_url:
        "https://cdn.discordapp.com/icons/1120697358234173511/a_272173fa7403d22ce2d65b779b1254e8.webp?size=96",
      payment_methods: "Skrill, iDeal, Steam Items",
      url: "https://discord.gg/MT9paamfTh",
      price: {
        value: "11",
        currency: "$",
      },
      discord: true,
      guilded: false,
      sellix: false,
    },
    ezShop: {
      invite: "https://discord.com/invite/j73PUArthn",
      image_url:
        "https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/00eb64ce-f4d1-4911-83c7-a630585d6b00/1600X1200",
      payment_methods: "Credit/Debit Card",
      url: "https://ezshop.sellpass.io/products/nighty",
      price: {
        value: "11",
        currency: "$",
      },
      discord: true,
      guilded: false,
      sellix: false,
    },
    "Nighty (Official Crypto)": {
      invite: "https://nighty.support",
      image_url: "https://nighty.one/img/nighty.png",
      payment_methods: "Crypto (BTC, LTC, ETH, XMR, USDT, ..)",
      url: "https://nighty.one/",
      price: {
        value: 10,
        currency: "$",
      },
      // customButtonsHtml: `
      // <p style="font-size: 20px; color: #ffffff;">Choose your payment method</p>
      // <a class="swal2-confirm swal2-styled" aria-label="" style="display: inline-block;" onclick="document.getElementById('shoppyBtn').click();" target="_blank">Crypto</a>
      // <a class="swal2-confirm swal2-styled" aria-label="" style="display: inline-block;" href="https://discord.gg/XGVGCA5ZUc" target="_blank">PayPal</a>
      // `,
      discord: false,
      guilded: false,
      sellix: true,
      shoppy: false,
      "product-id": "65647fce4dfef",
    },
    "Nighty (Official PayPal)": {
      invite: "https://discord.com/invite/XGVGCA5ZUc",
      image_url: "https://i.imgur.com/rj6EtZU.png",
      payment_methods: "PayPal",
      url: "https://discord.com/invite/XGVGCA5ZUc",
      price: {
        value: "10",
        currency: "$",
      },
      discord: true,
      guilded: false,
      sellix: false,
      shoppy: false,
    },
    "Recovery Kings": {
      invite: "https://recoverykings.net/discord",
      image_url: "assets/images/resellers-dialog/recoverykings.webp",
      payment_methods: "Credit/Debit cards, Apple Pay, CashApp, Giftcards",
      url: "https://recoverykings.net/product/nighty-selfbot/",
      price: {
        value: 11,
        currency: "$",
      },
      discord: true,
      guilded: false,
      sellix: false,
    },
    KrispyMods: {
      invite: "https://discord.com/invite/DRynhjPf8a",
      image_url: "assets/images/resellers-dialog/krispymods.png",
      payment_methods:
        "Credit/Debit Card, CashApp, Klarna, Bank transfer, Apple/Google Pay, Mercado Pago",
      url: "https://krispymods.com/product/nighty-selfbot/",
      price: {
        value: "11",
        currency: "$",
      },
      discord: true,
      guilded: false,
      sellix: false,
    },
    AresModz: {
      invite: "https://aresmodz.com/chat/",
      image_url: "assets/images/resellers-dialog/ares.png",
      payment_methods:
        "Credit/Debit Card, Apple/Google Pay, Klarna, Microsoft Pay, WeChat, iDeal, Bancontact, Przelewy24, Giftcards",
      url: "https://aresmodz.com/product/nighty-discord-selfbot-license-key/",
      price: {
        value: "12.6",
        currency: "$",
      },
      discord: true,
      guilded: false,
      sellix: false,
    },
    "Lmarket.fr": {
      invite: "https://discord.gg/lmarket",
      image_url: "assets/images/resellers-dialog/lmarket.png",
      payment_methods:
        "Credit/Debit Card, Apple/Google Pay, Paysafecard (Germany & France)",
      url: "https://lmarket.fr/product/nighty/",
      price: {
        value: "11",
        currency: "$",
      },
      discord: true,
      guilded: false,
      sellix: false,
    },
    "Dumbe Modz": {
      invite: "https://discord.com/invite/vZqrsdYV8E",
      image_url:
        "https://i.imgur.com/fAc11na.png",
      payment_methods: "Credit/Debit Card, Paysafecard",
      url: "https://dumbemodz.com/shop/accounts/nighty-selfbot/",
      price: {
        value: "11",
        currency: "$",
      },
      discord: true,
      guilded: false,
      sellix: false,
    },
  };
  var resellers_ = [
    "Josmods",
    "KrispyMods",
    "CT Market",
    "ezShop",
    "RevUnity",
    "Nighty (Official PayPal)",
    "Nighty (Official Crypto)",
    "Recovery Kings",
    "ezMod",
    "nshout.store",
    "AresModz",
    "Lmarket.fr",
    "Dumbe Modz",
  ];
  const { value: reseller_ } = await Swal.fire({
    title: "<h4>Select a seller</h4>",
    imageUrl: "assets/images/favicon/buy-nighty.gif",
    imageWidth: 150,
    imageHeight: 150,
    background: "#292929",
    title: "Purchase Nighty",
    html: `<p>Be part of our growing community.</p>`,
    customClass: {
      popup: "default-swal",
    },
    showClass: {
      popup: "animate__animated animate__zoomIn",
    },
    hideClass: {
      popup: "animate__animated animate__zoomOut",
    },
    input: "select",
    inputOptions: {
      "Nighty (Official PayPal)": `Nighty (Official PayPal) | ${resellers_data["Nighty (Official PayPal)"]["price"]["currency"]}${resellers_data["Nighty (Official PayPal)"]["price"]["value"]} | ${resellers_data["Nighty (Official PayPal)"]["payment_methods"]}`,
      "Nighty (Official Crypto)": `Nighty (Official Crypto) | ${resellers_data["Nighty (Official Crypto)"]["price"]["currency"]}${resellers_data["Nighty (Official Crypto)"]["price"]["value"]} | ${resellers_data["Nighty (Official Crypto)"]["payment_methods"]}`,
      // "Lmarket.fr": `Lmarket.fr | ${resellers_data["Lmarket.fr"]["price"]["currency"]}${resellers_data["Lmarket.fr"]["price"]["value"]} | ${resellers_data["Lmarket.fr"]["payment_methods"]}`,
      RevUnity: `RevUnity | ${resellers_data["RevUnity"]["price"]["currency"]}${resellers_data["RevUnity"]["price"]["value"]} | ${resellers_data["RevUnity"]["payment_methods"]}`,
      KrispyMods: `KrispyMods | ${resellers_data["KrispyMods"]["price"]["currency"]}${resellers_data["KrispyMods"]["price"]["value"]} | ${resellers_data["KrispyMods"]["payment_methods"]}`,
      // "nshout.store": `nshout.store | ${resellers_data["nshout.store"]["price"]["currency"]}${resellers_data["nshout.store"]["price"]["value"]} | ${resellers_data["nshout.store"]["payment_methods"]}`,
      "CT Market": `CT Market | ${resellers_data["CT Market"]["price"]["currency"]}${resellers_data["CT Market"]["price"]["value"]} | ${resellers_data["CT Market"]["payment_methods"]}`,
      // ezShop: `ezShop | ${resellers_data["ezShop"]["price"]["currency"]}${resellers_data["ezShop"]["price"]["value"]} | ${resellers_data["ezShop"]["payment_methods"]}`,
      ezMod: `ezMod | ${resellers_data["ezMod"]["price"]["currency"]}${resellers_data["ezMod"]["price"]["value"]} | ${resellers_data["ezMod"]["payment_methods"]}`,
      "Recovery Kings": `Recovery Kings | ${resellers_data["Recovery Kings"]["price"]["currency"]}${resellers_data["Recovery Kings"]["price"]["value"]} | ${resellers_data["Recovery Kings"]["payment_methods"]}`,
      "Dumbe Modz": `Dumbe Modz | ${resellers_data["Dumbe Modz"]["price"]["currency"]}${resellers_data["Dumbe Modz"]["price"]["value"]} | ${resellers_data["Dumbe Modz"]["payment_methods"]}`,
      // Josmods: `Josmods | ${resellers_data["Josmods"]["price"]["currency"]}${resellers_data["Josmods"]["price"]["value"]} | ${resellers_data["Josmods"]["payment_methods"]}`,
      AresModz: `AresModz | ${resellers_data["AresModz"]["price"]["currency"]}${resellers_data["AresModz"]["price"]["value"]} | ${resellers_data["AresModz"]["payment_methods"]}`,
    },
    inputPlaceholder: "Select a reseller",
    confirmButtonText: "Select",
    showCancelButton: true,
    inputValidator: (value) => {
      return new Promise((resolve) => {
        console.log(value);
        if (resellers_.includes(value)) {
          resolve();
        } else {
          resolve("You forgot to select a reseller!");
        }
      });
    },
  });

  if (reseller_) {
    var server_type;
    if (resellers_data[reseller_]["discord"]) server_type = "Discord server";
    else if (resellers_data[reseller_]["guilded"])
      server_type = "Guilded server";
    else server_type = " ";

    Swal.fire({
      title: `<h4>${reseller_}</h4>`,
      imageUrl: `${resellers_data[reseller_]["image_url"]}`,
      imageWidth: 100,
      imageHeight: 100,
      background: "#292929",
      html: `<div class="pricing--heading"><p style="font-size: 32px;">${
        resellers_data[reseller_]["price"]["currency"]
      }${resellers_data[reseller_]["price"]["value"]}</p></div><a href="${
        resellers_data[reseller_]["url"]
      }" target="_blank" style="font-size: 25px;">Website</a><br><a href="${
        resellers_data[reseller_]["invite"]
      }" target="_blank" style="font-size: 12px;">${server_type}</a><br><p style="font-size: 13px">${
        resellers_data[reseller_]["payment_methods"]
      }</p> ${
        reseller_ === "OGS Company"
          ? resellers_data[reseller_].customButtonsHtml
          : ""
      }`,
      showDenyButton: true,
      showConfirmButton: reseller_ === "OGS Company" ? false : true,
      focusConfirm: false,
      denyButtonText: "Back",
      confirmButtonText: "Buy",
    }).then((result) => {
      if (result.isDenied) {
        Resell();
      } else if (result.isConfirmed) {
        if (resellers_data[reseller_]["sellix"]) {
          SellixEmbed(resellers_data[reseller_]["product-id"]);
        } else if (resellers_data[reseller_]["shoppy"]) {
          document.getElementById("shoppyBtn").click();
        } else {
          window.open(resellers_data[reseller_]["url"]);
        }
      }
    });
  }
}

async function Official() {
  var discordInvite = "https://discord.gg/pFHzwrBD5C";
  Swal.fire({
    title: `<h4>Buy Nighty</h4>`,
    imageUrl: "assets/images/favicon/buy-nighty.gif",
    imageWidth: 100,
    imageHeight: 100,
    width: 425,
    customClass: {
      popup: "default-swal",
    },
    showClass: {
      popup: "animate__animated animate__zoomIn",
    },
    hideClass: {
      popup: "animate__animated animate__zoomOut",
    },
    background: "#292929",
    html: `<p style="font-size: 14px">For our own safety, <b>the official shop only accepts cryptocurrency</b> (Bitcoin, Ethereum & Litecoin). If you wish to buy via other payment methods <strong>(PayPal, Credit card, ...)</strong>, buy from one of our trusted resellers - click the red button below.<br><br>All orders have instant delivery. If you're running into issues or have any questions, do not hesitate to <a href="https://shoppy.gg/@nighty.one/query" target="_blank">contact us</a>.</p><br>`,
    showDenyButton: true,
    focusConfirm: true,
    denyButtonText: "Resellers",
    showCancelButton: true,
    cancelButtonText: "Close",
    confirmButtonText: "Buy with crypto",
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById("shoppyBtn").click();
    } else if (result.isDenied) {
      Resell();
    }
  });
}

async function Download(file) {
  Swal.fire({
    position: "bottom-start",
    imageUrl: "assets/images/favicon/buy-nighty.gif",
    imageWidth: 100,
    imageHeight: 100,
    title: `Downloading ${file}`,
    showConfirmButton: false,
    timer: 5000,
  });
}

// ios fix
if (iOS()) {
  awardVideo.src = "assets/videos/BestToolAward.mp4";
  document.querySelector(".screenshot-customization").src =
    "assets/images/features/customization.mp4";
  document.querySelector(".screenshot-session-viewer").src =
    "assets/images/features/session-viewer.mp4";
  document.querySelector(".screenshot-spotify").src =
    "assets/images/features/spotify.mp4";
}


function hideAwardVideo() {
  awardVideo.classList.add("award-video-hidden");
  awardVideoBox.classList.add("award-hidden");
  overlay.classList.add("award-hidden");
  setTimeout(() => awardVideo.pause(), 400);
}

function iOS() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
}

// get main reseller
async function updateMainReseller() {
  const req = await fetch('https://nighty.one/main-reseller-api/api.php');
  if(!req || !req.ok || req.status !== 200) return;

  const res = await req.json();
  if(!res) return;

  const {value} = res;
  const {link, price} = value;

  if(!link || !price) return;

  const priceEl = document.getElementById('main-reseller-price')
  const resellerBtn = document.getElementById('main-reseller-button')

  if(!priceEl || !resellerBtn) return;

  priceEl.textContent = price;
  resellerBtn.href = link;
}
updateMainReseller()

// nightygoinfo
document.getElementById('nightygo-download-btn').addEventListener('click', (e) => {
  document.getElementById('nightygo-info').style.display = 'block'
})

// Dynamic user counter
// (async function() {

//     const userCountEl = document.querySelector("[data-dynamic-user-count]")

//     const getUserCount = async () => {
//         const req = await fetch('https://auth.nighty.support/api/stats')
//         try {
//             const data = await req.json()
//             const {global_users: globalUsers} = data[0]
//             if(globalUsers) return globalUsers;
//         } catch (err) {
//             return null;
//         }
//     }

//     const userCount = await getUserCount()

//     if(!userCount || userCount < 4000) return;

//     userCountEl.textContent = `${userCount} satisfied users`;
// })()
