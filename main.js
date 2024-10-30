
  class RelativeTime extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.render();
      // setInterval(() => {
      //   this.render();
      // }, 1000);
    }
    render() {
      const time = new Date(this.getAttribute('time')).getTime();
      const now = Date.now();

      console.log({
        time,
        now,
        seconds: (now - time) / 1000,
        minutes: (now - time) / (1000 * 60),
        hours: Math.floor((now - time) / (1000 * 60 * 60))
      })

      const diff = now - time;
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(diff / (1000 * 60));
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const days = Math.floor(hours / 24);
      const months = Math.floor(days / 30);
      const years = Math.floor(months / 12);

      let aux = '...';
      if (months >= 12) {
        aux = `Hace ${years} año${years > 1 ? 's' : ''}`
      } else if (days > 30 && months >= 1) {
        aux = `Hace ${months} mes${months > 1 ? 'es' : ''}`
      } else if (days >= 1) {
        aux = `Hace ${days} día${days > 1 ? 's' : ''}`
      } else if (hours >= 1) {
        aux = `Hace ${hours} hora${hours > 1 ? 's' : ''}`
      } else if (minutes >= 1) {
        aux = `Hace ${minutes} minuto${minutes > 1 ? 's' : ''}`
      } else if (seconds >= 1) {
        aux = `Hace ${seconds} segundo${seconds > 1 ? 's' : ''}`
      }

      this.textContent = aux;
    }
  }
  customElements.define('relative-time', RelativeTime);


  const articles = [
    {
      "id": 1,
      "image": "https://cdn.kqed.org/wp-content/uploads/sites/35/2024/10/GettyImages-1347890261-1020x680.jpg",
      "title": "Climate Activists Push for Carbon Tax With Measure GG, But Critics Warn it Could Backfire",
      "description": "Grassroots climate activists argue a tax on gas use in large buildings will help all of Berkeley kick fossil fuels. But many politicians, businesses, and nonprofits, even those that work on climate, don’t think Measure GG is the policy to get there.",
      "date": "2023-10-17T11:00:16Z",
      "category": "Climate"
    },
    {
      "id": 2,
      "image": "https://fortune.com/img-assets/wp-content/uploads/2024/10/GettyImages-2170862982_413c33-e1729160290535.jpg?resize=1200,600",
      "title": "Musk’s empire risks being targeted by EU for potential X fines",
      "description": "The EU may target Elon Musk’s broader business empire for X fines, potentially including revenue from SpaceX and Neuralink to increase penalties.",
      "date": "2024-09-17T10:32:45Z",
      "category": "Business"
    },
    {
      "id": 3,
      "image": "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1729160267/autoexpress/2024/10/Omode%20E5%20first%20UK%20drive.jpg",
      "title": "Omoda E5 in Noble trim - pictures",
      "description": "Pictures of the electric Omode E5 SUV being driven on UK roads. Pictures taken by Auto Express senior photographer Pete Gibson",
      "date": "2024-10-15T10:30:56Z",
      "category": "Automobile"
    },
    {
      "id": 4,
      "image": "https://cdn.mos.cms.futurecdn.net/6xqynicLzH6sSskfiNyWoT-1200-80.jpg",
      "title": "Renault, Alpine and Citroën help the 2024 Paris Motor Show return to form",
      "description": "Explore the most delectable debuts at the Paris Motor Show 2024 – or Mondial de l'Auto – including designs from France's big car makers and niche machines from around the world",
      "date": "2024-10-13T10:25:24Z",
      "category": "Automobile"
    },
    {
      "id": 5,
      "image": "https://www.computerworld.com/wp-content/uploads/2024/10/3567767-0-90640600-1729160617-IDG-Germany-Intel-September-News.jpg?quality=50&strip=all&w=1024",
      "title": "Chinese cybersecurity association urges review of Intel products",
      "description": "The Cybersecurity Association of China (CSAC) has urged a security review of Intel products sold in the country, claiming the US semiconductor firm poses ongoing threats to China’s national security and interests.",
      "date": "2024-10-01T10:22:56Z",
      "category": "Technology"
    },
    //news
    {
      "id": 6,
      "image": "https://static.euronews.com/articles/stories/04/28/68/18/1200x675_cmsv2_92dba13c-6157-5f13-946f-a13e4da2d9fd-4286818.jpg",
      "title": "Spain’s National Elections Enter Final Stretch with Unprecedented Turnout",
      "description": "As Spain approaches its national elections, voter turnout is at a historic high. Experts say this could signal a major shift in the political landscape.",
      "date": "2024-10-27T12:15:00Z",
      "category": "ES Election"
    },
    {
      "id": 7,
      "image": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2024-08/240822-split-harris-trump-ch-1300-2d23e3.jpg",
      "title": "El FBI indica que investiga los intentos de hackear las campañas de Trump y Biden-Harris",
      "description": "El FBI dijo este lunes por la tarde que está investigando los intentos de hackear tanto la campaña de Trump como la de Biden-Harris.La investigación incluye intentos de hackeo dirigidos a tres miembros del personal de la campaña de Biden-Harris, así como a Roger Stone, exasesor del ex presidente Donald Trump, según una fuente familiarizada con el asunto que habló bajo condición de anonimato",
      "date": "2024-10-25T18:30:00Z",
      "category": "Sports"
    },
    {
      "id": 8,
      "image": "https://img2.rtve.es/i/?w=1600&i=01730136589346.jpg",
      "title": "El escándalo de Íñigo Errejón en España: qué ha pasado, quién le denunció y qué ha dicho la izquierda",
      "description": "Aunque no integra el Ejecutivo español, la proyección política y pública de Íñigo Errejón han contribuido a que la coalición Sumar, partido del que hasta hace pocos días formó parte y que gobierna junto al Partido Socialista Obrero Español (PSOE), sufra una fuerte sacudida tras hacerse públicas varias denuncias por presuntos comportamientos sexuales inadecuados y actitudes machistas en su contra.",
      "date": "2024-10-20T09:45:00Z",
      "category": "Innovation"
    },
    //ES Elecciones
    {
      "id": 9,
      "image": "https://static.euronews.com/articles/stories/07/74/26/44/1200x675_cmsv2_389322d5-f7ae-5820-9e66-198dc8d37a4c-7742644.jpg",
      "title": "Candidates Gear Up for Final Debates Ahead of Spain’s Elections",
      "description": "With less than a week to go, the leading candidates prepare for their last debates in a bid to sway undecided voters.",
      "date": "2024-10-28T15:10:00Z",
      "category": "ES Election"
    },
    {
      "id": 10,
      "image": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2024-08/240822-split-harris-trump-ch-1300-2d23e3.jpg",
      "title": "New Polling Data Shows Shift in Voter Preferences Among Young Spaniards",
      "description": "Recent polls reveal that younger voters in Spain are favoring progressive candidates, indicating potential shifts in traditional voting patterns.",
      "date": "2024-10-24T13:25:00Z",
      "category": "ES Election"
    },
    {
      "id": 11,
      "image": "https://imagenes.elpais.com/resizer/v2/CJ4YS7PGWRE4LHSIBGLQTT42GI.jpg?auth=78db1e154238de027ae7708364e66809c68759d7a5c658057d415b791b4214af&width=1200&height=675&smart=true://caracoltv.brightspotcdn.com/dims4/default/28852a7/2147483647/strip/true/crop/1280x766+0+0/resize/1000x598!/format/webp/quality/75/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2Fc4%2Fc9%2Fa82934794114b7045650b562812e%2Finundaciones-valencia1.jpghttps://imagenes.elpais.com/resizer/v2/CJ4YS7PGWRE4LHSIBGLQTT42GI.jpg?auth=78db1e154238de027ae7708364e66809c68759d7a5c658057d415b791b4214af&width=1200&height=675&smart=true",
      "title": "El escándalo de Íñigo Errejón en España: qué ha pasado, quién le denunció y qué ha dicho la izquierda",
      "description": "Aunque no integra el Ejecutivo español, la proyección política y pública de Íñigo Errejón han contribuido a que la coalición Sumar, partido del que hasta hace pocos días formó parte y que gobierna junto al Partido Socialista Obrero Español (PSOE), sufra una fuerte sacudida tras hacerse públicas varias denuncias por presuntos comportamientos sexuales inadecuados y actitudes machistas en su contra.",
      "date": "2024-10-18T11:55:00Z",
      "category": "ES Election"
    },

    // Sports Category
    {
      "id": 12,
      "image": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2162028872-copy.jpg?c=original",
      "title": "Spain's National Soccer Team Qualifies for the 2024 UEFA Championship",
      "description": "Spain's soccer team has secured its spot in the UEFA championship, boosting hopes for a successful campaign.",
      "date": "2024-10-23T19:00:00Z",
      "category": "Sports"
    },
    {
      "id": 13,
      "image": "https://idsb.tmgrup.com.tr/ly/uploads/images/2024/05/06/326552.jpg",
      "title": "Spanish Tennis Star Advances to Semi-Finals in Madrid Open",
      "description": "Spain’s top-ranked tennis player made an impressive comeback to advance to the semi-finals, thrilling local fans.",
      "date": "2024-10-21T15:20:00Z",
      "category": "Sports"
    },
    {
      "id": 14,
      "image": "https://media.npr.org/assets/img/2023/09/17/gettyimages-1672169129-26b4829f8930de8f49f81aefd06dc7c7a4bdf172.jpg?s=6",
      "title": "Spain to Host World’s Largest Cycling Tour Event",
      "description": "Spain has been selected as the host country for next year’s global cycling tour, which will feature top cyclists from around the world.",
      "date": "2024-10-17T17:10:00Z",
      "category": "Sports"
    },

    // Business Category
    {
      "id": 15,
      "image": "https://example.com/tech-expansion.jpg",
      "title": "Spanish Tech Firms Drive Global Expansion with New Funding",
      "description": "A recent wave of investment is fueling the expansion of Spanish tech companies into new international markets.",
      "date": "2024-10-27T08:30:00Z",
      "category": "Business"
    },
    {
      "id": 16,
      "image": "https://example.com/economy-growth.jpg",
      "title": "Spain’s Economy Set for Record Growth in 2024, Experts Predict",
      "description": "Economic analysts are forecasting substantial growth for Spain in 2024, driven by surges in tourism and renewable energy investments.",
      "date": "2024-10-22T11:15:00Z",
      "category": "Business"
    },
    {
      "id": 17,
      "image": "https://example.com/energy-project.jpg",
      "title": "Spanish Energy Giant Announces New Renewable Projects",
      "description": "Spain's leading energy company has announced plans to launch a series of renewable projects, aiming to meet rising global demand.",
      "date": "2024-10-20T16:50:00Z",
      "category": "Business"
    },

    // Innovation Category
    {
      "id": 18,
      "image": "https://example.com/smart-city.jpg",
      "title": "Madrid’s New Smart City Initiative Set to Transform Urban Living",
      "description": "Madrid has launched a new smart city initiative, integrating AI and IoT technologies to enhance sustainability and city services.",
      "date": "2024-10-26T09:45:00Z",
      "category": "Innovation"
    },
    {
      "id": 19,
      "image": "https://example.com/robotics-lab.jpg",
      "title": "Spanish Robotics Lab Develops Medical AI to Aid Surgeries",
      "description": "Researchers in Barcelona have developed AI-assisted robotics to assist surgeons with precision tasks, potentially reducing surgery times.",
      "date": "2024-10-23T14:30:00Z",
      "category": "Innovation"
    },
    {
      "id": 20,
      "image": "https://example.com/eco-friendly.jpg",
      "title": "Eco-Friendly Innovations Flourish in Spain's Startup Scene",
      "description": "Spanish startups focusing on eco-friendly tech have seen an upsurge, launching products aimed at reducing environmental impact.",
      "date": "2024-10-19T12:10:00Z",
      "category": "Innovation"
    },

    // Culture Category
    {
      "id": 21,
      "image": "https://www.lavanguardia.com/files/og_thumbnail/uploads/2013/08/28/5f9b1d489cdf4.jpeg",
      "title": "Barcelona’s Annual Culture Festival Attracts Record Crowds",
      "description": "This year's cultural festival in Barcelona has seen record attendance, with visitors enjoying live music, art, and food from around the world.",
      "date": "2024-10-25T20:00:00Z",
      "category": "Culture"
    },
    {
      "id": 22,
      "image": "https://thesingular.space/uploads/imgen/6097-6089-20221021-125704.jpg",
      "title": "New Art Exhibit in Madrid Celebrates Spanish Surrealism",
      "description": "Madrid's latest exhibit features surrealist works from Spanish artists, attracting art lovers from all over Europe.",
      "date": "2024-10-22T11:30:00Z",
      "category": "Culture"
    },
    {
      "id": 23,
      "image": "https://www.colorado.edu/today/sites/default/files/styles/medium/public/article-image/flamenco.jpg?itok=TiM7l-AR",
      "title": "Reviving Tradition: Flamenco Music and Dance Gain New Popularity",
      "description": "Flamenco is making a comeback across Spain, with new generations embracing the traditional music and dance.",
      "date": "2024-10-18T14:00:00Z",
      "category": "Culture"
    },

    // Arts Category
    {
      "id": 24,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwomHoAkKovHHVwDIt1dVa9_Za0c7tA1M74w&s",
      "title": "Spain’s National Theater Announces Upcoming Season Highlights",
      "description": "The Spanish National Theater has released its schedule for the upcoming season, promising an array of classic and contemporary works.",
      "date": "2024-10-24T10:20:00Z",
      "category": "Arts"
    },
    {
      "id": 25,
      "image": "https://www.plateamagazine.com/images/fotos/noticias/Helena_Canovas-Anna_Tena.jpg",
      "title": "Young Spanish Artist Wins Prestigious European Art Award",
      "description": "A young Spanish painter has won the prestigious European Art Award for her work focusing on climate change and social issues.",
      "date": "2024-10-20T12:05:00Z",
      "category": "Arts"
    },
    {
      "id": 26,
      "image": "https://static.euronews.com/articles/stories/07/94/36/00/1920x1080_cmsv2_4f0c0d5e-037d-55e7-8293-1c539e8c53c1-7943600.jpg",
      "title": "Modern Sculptures Take Center Stage in Bilbao’s Outdoor Exhibition",
      "description": "Bilbao has opened an outdoor sculpture exhibition featuring works from acclaimed artists, drawing art enthusiasts from across the globe.",
      "date": "2024-10-17T16:35:00Z",
      "category": "Arts"
    }
  ];

  class CustomSearch extends HTMLElement {
    constructor() {
      super();
      this.articles = articles;
    }

    connectedCallback() {
      const dialogBtn = this.querySelector('.dialog-search');
      const closeBtn = this.querySelector('.close-btn');
      const dialog = this.querySelector('dialog');

      dialogBtn.addEventListener('click', () => {
        dialog.showModal();
      });
      closeBtn.addEventListener('click', () => {
        dialog.close();
      });
      const siteSearch = this.querySelector('#site-search');
      siteSearch.addEventListener('input', (event) => this.search(event));

      this.renderResults('')
    }

    search(event) {
      event.preventDefault();
      const siteSearch = this.querySelector('#site-search');
      const term = siteSearch.value
      // console.log({term});
      this.renderResults(term)
    }

    renderResults(term = '') {
      // Implement your search logic here
      const searchResults = this.querySelector('#search-results');
      searchResults.innerHTML = '';
      const _articles = this.articles
        .filter(article => article.title.toLowerCase().includes(term.toLowerCase()))

      // mode 3 using <template>
      const template = this.querySelector('template').content;
      // loop
      console.log({ _articles })
      _articles.map(article => {
        const li = template.querySelector('li').cloneNode(true);
        // item-image, item-title, item-description
        li.querySelector('.card .item-image').src = article.image;

        li.querySelector('.card .item-description').textContent = article.description;
        // replate relative-time time
        li.querySelector('relative-time').setAttribute('time', article.date)
        searchResults.appendChild(li);

        const title = li.querySelector('.card .item-title');
        const link = document.createElement("a");
        link.href = 'article.html?id=' + article.id;
        link.textContent = article.title;
        title.appendChild(link);
      })
    }
  }
  customElements.define('custom-search', CustomSearch);

  document.addEventListener("DOMContentLoaded", () => {
    const slidingMenu = document.getElementById("sliding-menu");
    const menuToggleBtn = document.querySelector(".menu-toggle");
    const closeMenuBtn = document.querySelector(".close-menu");

    menuToggleBtn.addEventListener("click", () => {
      slidingMenu.classList.add("open");
    });

    closeMenuBtn.addEventListener("click", () => {
      slidingMenu.classList.remove("open");
    });
  });
  const getId = () => {
    const searchParams = new URLSearchParams(location.search.slice(1));
    return Number(searchParams.get('id'));
}
  class CustomArticle extends HTMLElement {
    constructor() {
        super();
        this.articleId = getId();
    }
    connectedCallback() {
        this.render();
    }

    render() {
        const article = articles.find(article => article.id == this.articleId)

        // reemplazos de los contenidos del article
        const h1 = this.querySelector('h1');
        h1.textContent = article.title;
        //   descripción
        const description = this.querySelector('p');
        description.textContent = article.description;
        //   imagen
        const img = this.querySelector('img');
        img.src = article.image;
        // relative time
        const relativeTime = this.querySelector('relative-time');
        //  relativeTime.setAttribute('time',article.date); --forma más nueva de hacer el relativeTime
        const newRelativeTime = `<relative-time time="${article.date}"/>`//forma más simple pero antigua
        relativeTime.outerHTML = newRelativeTime;
    }
}
customElements.define('custom-article', CustomArticle);
