var collection = [
  {
    "first-two-column-banner": [
      {
        headline: "Lock It In",
        subHeadline:
          "There's no better way to secure your goods than with a new bag.",
        desktopImg: "lock-it.jpg",
        mobileImg: "get-cozy-d.jpg",
        link: "lock-it-in.html"
      },
      {
        headline: "Bodycon Is Back",
        subHeadline:
          "From slinky dresses to cut-out tops and skin-tight pants.",
        desktopImg: "bodycon-d.jpg",
        mobileImg: "get-cozy-d.jpg",
        link: "bodycon-is-back.html"
      }
    ]
  },
  {
    "second-two-column-banner": [
      {
        headline: "Laid-Back",
        subHeadline:
          "Shop our curated collection of something chic yet comfy to add to your wardrobe.",
        desktopImg: "laidback-d.jpg",
        mobileImg: "get-cozy-d.jpg",
        link: "laid-back.html"
      },
      {
        headline: "Sneakerheads",
        subHeadline: "Upgrade your sneaker collection.",
        desktopImg: "sneakerhead-d.jpg",
        mobileImg: "get-cozy-d.jpg",
        link: "sneakerheads.html"
      }
    ]
  },
  {
    "three-column-banner": [
      {
        headline: "Get Cozy",
        subHeadline: "Outerwear to prepare you for fall.",
        desktopImg: "get-cozy-m.png",
        mobileImg: "get-cozy-d.jpg",
        link: "get-cozy.html",
        tBlackColor: true
      },
      {
        headline: "Join The Cult",
        subHeadline:
          "Discover the most sought-after pieces everyone has their sights on.",
        desktopImg: "the-cult-nd.jpg",
        mobileImg: "coln2.png",
        link: "join-the-cult.html",
        tBlackColor: true
      },
      {
        headline: "Timeless Style",
        subHeadline: "The classic watches every collection needs.",
        desktopImg: "time-less-m.png",
        mobileImg: "time-less-mm.png",
        link: "timeless-style.html",
        tBlackColor: false
      }
    ]
  },
  {
    imgPath: "{{media url='wysiwyg/thelist/nlp21/"
  }
];

var collectionHtml = `<div class="collection-f2">   
    <section class="lp-collection">
       <div class="t-block-lp" style="column-gap: 37px;">         
          <div class="col_1" onclick="window.location.href='{{store direct_url='collections/${
            collection[0]["first-two-column-banner"][0].link
          }'}}'">
            <img src="${collection[3].imgPath}${
  collection[0]["first-two-column-banner"][0].desktopImg
}'}}" alt="" />
            <div class="flex-content">              
              <h3>${collection[0]["first-two-column-banner"][0].headline}</h3>
              <p>${collection[0]["first-two-column-banner"][0].subHeadline}</p>
              <a href="{{store direct_url='collections/${
                collection[0]["first-two-column-banner"][0].link
              }'}}">SHOP THE COLLECTION</a>
            </div>
          </div>
           <div class="col_2" onclick="window.location.href='{{store direct_url='collections/${
             collection[0]["first-two-column-banner"][1].link
           }'}}'">
            <img src="${collection[3].imgPath}${
  collection[0]["first-two-column-banner"][1].desktopImg
}'}}" alt="" />
            <div class="flex-content">              
                <h3>${collection[0]["first-two-column-banner"][1].headline}</h3>
                <p>${
                  collection[0]["first-two-column-banner"][1].subHeadline
                }</p>
              <a href="{{store direct_url='collections/${
                collection[0]["first-two-column-banner"][1].link
              }'}}">Shop the collection</a>
            </div>
          </div>
        </div>
    </section>
    <section class="lp-m-collection  m-first">
     <div class="full-col" onclick="window.location.href='{{store direct_url='collections/${
       collection[0]["first-two-column-banner"][0].link
     }'}}'">
        <div class="banner">
          <img src="${collection[3].imgPath}${
  collection[0]["first-two-column-banner"][0].mobileImg
}'}}" alt="" />
        </div>
        <div class="lp-content-box">
          
          <h3>${collection[0]["first-two-column-banner"][0].headline}</h3>
          <p>${collection[0]["first-two-column-banner"][0].subHeadline}</p>
          <a href="{{store direct_url='collections/${
            collection[0]["first-two-column-banner"][0].link
          }'}}">SHOP THE COLLECTION</a>
        </div>
      </div>
    </section> 
   <section class="lp-m-collection">
      <div class="full-col" onclick="window.location.href='{{store direct_url='collections/${
        collection[0]["first-two-column-banner"][1].link
      }'}}'">
        <div class="banner">
         <img src="${collection[3].imgPath}${
  collection[0]["first-two-column-banner"][1].mobileImg
}'}}" alt="" />
        </div>
        <div class="lp-content-box">
          
          <h3>${collection[0]["first-two-column-banner"][1].headline}</h3>
          <p>${collection[0]["first-two-column-banner"][1].subHeadline}</p>
          <a href="{{store direct_url='collections/${
            collection[0]["first-two-column-banner"][1].link
          }'}}">Shop the collection</a>
        </div>
      </div>
    </section>
    <div class="text-scroll">
         <div class="marquee">
          <div class="marquee-text">
              <span>NEW STYLES EVERY DAY</span>  <span class="seprator-line">//</span>  FAST SHIPPING & EASY RETURNS <span class="seprator-line">//</span> <span><a href="https://apps.apple.com/us/app/the-list/id1440144974?ls=1" target="_blank">DOWNLOAD THE APP</a></span> <span class="seprator-line">//</span>FAST SHIPPING & EASY RETURNS   <span class="seprator-line">//</span>  <span>NEW STYLES EVERY DAY</span>  <span class="seprator-line">//</span>  FAST SHIPPING & EASY RETURNS <span class="seprator-line">//</span> <span><a href="https://apps.apple.com/us/app/the-list/id1440144974?ls=1" target="_blank">DOWNLOAD THE APP</a></span> <span class="seprator-line">//</span>FAST SHIPPING & EASY RETURNS  <span class="seprator-line">//</span>  <span>NEW STYLES EVERY DAY</span>  <span class="seprator-line">//</span>  FAST SHIPPING & EASY RETURNS <span class="seprator-line">//</span> <span><a href="https://apps.apple.com/us/app/the-list/id1440144974?ls=1" target="_blank">DOWNLOAD THE APP</a></span> <span class="seprator-line">//</span>FAST SHIPPING & EASY RETURNS  <span class="seprator-line">//</span>  <span>NEW STYLES EVERY DAY</span>  <span class="seprator-line">//</span>  FAST SHIPPING & EASY RETURNS <span class="seprator-line">//</span> <span><a href="https://apps.apple.com/us/app/the-list/id1440144974?ls=1" target="_blank">DOWNLOAD THE APP</a></span> <span class="seprator-line">//</span>FAST SHIPPING & EASY RETURNS  <span class="seprator-line">//</span>  <span>NEW STYLES EVERY DAY</span>  <span class="seprator-line">//</span>  FAST SHIPPING & EASY RETURNS <span class="seprator-line">//</span> <span><a href="https://apps.apple.com/us/app/the-list/id1440144974?ls=1" target="_blank">DOWNLOAD THE APP</a></span> <span class="seprator-line">//</span>FAST SHIPPING & EASY RETURNS  <span class="seprator-line">//</span>  <span>NEW STYLES EVERY DAY</span>  <span class="seprator-line">//</span>  FAST SHIPPING & EASY RETURNS <span class="seprator-line">//</span> <span><a href="https://apps.apple.com/us/app/the-list/id1440144974?ls=1" target="_blank">DOWNLOAD THE APP</a></span> <span class="seprator-line">//</span>FAST SHIPPING & EASY RETURNS  <span class="seprator-line">//</span>  <span>NEW STYLES EVERY DAY</span>  <span class="seprator-line">//</span>  FAST SHIPPING & EASY RETURNS <span class="seprator-line">//</span> <span><a href="https://apps.apple.com/us/app/the-list/id1440144974?ls=1" target="_blank">DOWNLOAD THE APP</a></span> <span class="seprator-line">//</span>FAST SHIPPING & EASY RETURNS  <span class="seprator-line">//</span>  <span>NEW STYLES EVERY DAY</span>  <span class="seprator-line">//</span>  FAST SHIPPING & EASY RETURNS <span class="seprator-line">//</span> <span><a href="https://apps.apple.com/us/app/the-list/id1440144974?ls=1" target="_blank">DOWNLOAD THE APP</a></span> <span class="seprator-line">//</span>FAST SHIPPING & EASY RETURNS  <span class="seprator-line">//</span>  <span>NEW STYLES EVERY DAY</span>  <span class="seprator-line">//</span>  FAST SHIPPING & EASY RETURNS <span class="seprator-line">//</span> <span><a href="https://apps.apple.com/us/app/the-list/id1440144974?ls=1" target="_blank">DOWNLOAD THE APP</a></span> <span class="seprator-line">//</span>FAST SHIPPING & EASY RETURNS  <span class="seprator-line">//</span>  <span>NEW STYLES EVERY DAY</span>  <span class="seprator-line">//</span>  FAST SHIPPING & EASY RETURNS <span class="seprator-line">//</span> <span><a href="https://apps.apple.com/us/app/the-list/id1440144974?ls=1" target="_blank">DOWNLOAD THE APP</a></span> <span class="seprator-line">//</span>FAST SHIPPING & EASY RETURNS  <span class="seprator-line">//</span>  <span>NEW STYLES EVERY DAY</span>  <span class="seprator-line">//</span>  FAST SHIPPING & EASY RETURNS <span class="seprator-line">//</span> <span><a href="https://apps.apple.com/us/app/the-list/id1440144974?ls=1" target="_blank">DOWNLOAD THE APP</a></span> <span class="seprator-line">//</span>FAST SHIPPING & EASY RETURNS
          </div>
        </div>
   </div>
   <section class="lp-collection">
       <div class="t-block-lp" style="column-gap: 37px;">
         <div class="col_2" onclick="window.location.href='{{store direct_url='collections/${
           collection[1]["second-two-column-banner"][0].link
         }'}}'">
            <img src="${collection[3].imgPath}${
  collection[1]["second-two-column-banner"][0].desktopImg
}'}}" alt="" />
            <div class="flex-content">
              
              <h3>${collection[1]["second-two-column-banner"][0].headline}</h3>
              <p>${collection[1]["second-two-column-banner"][0].subHeadline}</p>
              <a href="{{store direct_url='collections/${
                collection[1]["second-two-column-banner"][0].link
              }'}}">Shop the collection</a>
            </div>
          </div>
          <div class="col_1" onclick="window.location.href='{{store direct_url='collections/${
            collection[1]["second-two-column-banner"][1].link
          }'}}'">
            <img src="${collection[3].imgPath}${
  collection[1]["second-two-column-banner"][1].desktopImg
}'}}" alt="" />
            <div class="flex-content">
              
              <h3>${collection[1]["second-two-column-banner"][1].headline}</h3>
              <h3>${
                collection[1]["second-two-column-banner"][1].subHeadline
              }</h3>
              <a href="{{store direct_url='collections/${
                collection[1]["second-two-column-banner"][1].link
              }'}}">Shop the collection</a>
            </div>
          </div>    
        </div>
    </section>
    <section class="lp-m-collection m-first">
     <div class="full-col" onclick="window.location.href='{{store direct_url='collections/${
       collection[1]["second-two-column-banner"][0].link
     }'}}'">
          <div class="banner">
           <img src="${collection[3].imgPath}${
  collection[1]["second-two-column-banner"][0].mobileImg
}'}}" alt="" />
          </div>
          <div class="lp-content-box">
            
            <h3>${collection[1]["second-two-column-banner"][0].headline}</h3>
            <p>${collection[1]["second-two-column-banner"][0].subHeadline}</p>
            <a href="{{store direct_url='collections/${
              collection[1]["second-two-column-banner"][0].link
            }'}}">Shop the collection</a>
          </div>
        </div>
    </section>
    <section class="lp-m-collection">
     <div class="full-col" onclick="window.location.href='{{store direct_url='collections/${
       collection[1]["second-two-column-banner"][1].link
     }'}}'">
          <div class="banner">
           <img src="${collection[3].imgPath}${
  collection[1]["second-two-column-banner"][1].mobileImg
}'}}" alt="" />
          </div>
          <div class="lp-content-box">
            
            <h3>${collection[1]["second-two-column-banner"][1].headline}</h3>
            <h3>${collection[1]["second-two-column-banner"][1].subHeadline}</h3>
            <a href="{{store direct_url='collections/${
              collection[1]["second-two-column-banner"][1].link
            }'}}">Shop the collection</a>
          </div>
        </div>
    </section>
    <section id="slider-1" class="lp-collection swiprt-box">
       <div class="swiper-title-box">
       <h3>New In</h3>
       <!-- <a href="{{store store direct_url='new-in-2.html'}}">Shop ALL</a> --></div>
        {{block class="Mageplaza\Productslider\Block\CategoryId" template="Mageplaza_Productslider::productslider.phtml" products_count="10" category_id='727'}}
        <div class="button-carousel"><button onclick="window.location.href='{{store direct_url='new-in.html'}}'">Shop NEW IN</button></div>
    </section>

    <section class="cols-section">
      <div class="six-cols-f2">      
          <div class="colsf6">
             <a href="{{store direct_url='collections/${
               collection[2]["three-column-banner"][0].link
             }'}}"> 
             <img class="c-screen" src="{{media url='${collection[3].imgPath}${
  collection[2]["three-column-banner"][0].desktopImg
}'}}" style='height:100%'/> 
             <img class="c-mobile" src="{{media url='${collection[3].imgPath}${
  collection[2]["three-column-banner"][0].mobileImg
}'}}" /> </a>
             <div class="cols-content bottom ${
               collection[2]["three-column-banner"][0].tBlackColor
                 ? "black"
                 : "white"
             }">
                <h3>${collection[2]["three-column-banner"][0].headline}</h3>
                <p>${collection[2]["three-column-banner"][0].subHeadline}</p>
                <a href="{{store direct_url='collections/${
                  collection[2]["three-column-banner"][0].link
                }'}}">SHOP THE COLLECTION<span class="a-arrow ${
  collection[2]["three-column-banner"][0].tBlackColor ? "black" : "white"
}"></span></a>
             </div>
          </div>
          <div class="colsf6" id="other-store">
             <a href="{{store direct_url='collections/${
               collection[2]["three-column-banner"][1].link
             }'}}"> 
             <img class="c-screen" src="{{media url='${collection[3].imgPath}${
  collection[2]["three-column-banner"][1].desktopImg
}'}}" style="height: 100%" /> 
             <img class="c-mobile" src="{{media url='${collection[3].imgPath}${
  collection[2]["three-column-banner"][1].mobileImg
}'}}" /> </a>
             <div class="cols-content bottom ${
               collection[2]["three-column-banner"][1].tBlackColor
                 ? "black"
                 : "white"
             }">
                <h3>${collection[2]["three-column-banner"][1].headline}</h3>
                <p>${collection[2]["three-column-banner"][1].subHeadline}</p>
                <a href="{{store direct_url='collections/${
                  collection[2]["three-column-banner"][1].link
                }'}}">SHOP THE COLLECTION<span class="a-arrow ${
  collection[2]["three-column-banner"][1].tBlackColor ? "black" : "white"
}"></span></a>
             </div>
          </div>
          <div class="colsf6">
             <a href="{{store direct_url='collections/${
               collection[2]["three-column-banner"][1].link
             }'}}"> 
             <img class="c-screen" src="{{media url='${collection[3].imgPath}${
  collection[2]["three-column-banner"][2].desktopImg
}}}" style='height:100%'/> 
             <img class="c-mobile" src="{{media url='${collection[3].imgPath}${
  collection[2]["three-column-banner"][2].mobileImg
}'}}" /> </a>
             <div class="cols-content bottom ${
               collection[2]["three-column-banner"][2].tBlackColor
                 ? "black"
                 : "white"
             }">
                <h3>${collection[2]["three-column-banner"][2].headline}</h3>
                <p>${collection[2]["three-column-banner"][2].subHeadline}</p>
                <a href="{{store direct_url='collections/${
                  collection[2]["three-column-banner"][1].link
                }'}}">SHOP THE COLLECTION<span class="a-arrow ${
  collection[2]["three-column-banner"][2].tBlackColor ? "black" : "white"
}"></span></a>
             </div>
          </div>
       </div>
    </section>
    </div>`;
function myFunction() {
  document.getElementById("htmlArea").value = collectionHtml;
}
