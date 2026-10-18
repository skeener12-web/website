const hobbyInfo = {
  "Reading": {
    "description": "Reading has always been something I enjoy because it gives me a chance to escape from everything going on around me. I love getting caught up in a good story and becoming attached to the characters. Sometimes I can spend hours reading without realizing how much time has passed. I enjoy finding new books and exploring different stories, especially ones that keep me interested and wanting to know what happens next. Reading is also one of my favorite ways to relax when I finally have some free time.",
    "heading": "Books I've Read",
    "examples": [
      "The Rook series",
      "In Cold Blood",
      "Scythe",
      "And many more"
    ]
  },
  "Cooking": {
    "description": "Cooking is something I really enjoy because I like being able to make different meals for myself and my family. I love trying new recipes and figuring out ways to make them my own. Sometimes things don't turn out exactly how I planned, but that's part of learning and getting better at it. I especially enjoy making homemade meals that everyone can sit down and enjoy together. Cooking gives me a chance to be creative while also doing something useful for the people I care about.",
    "heading": "Meals I've Made",
    "examples": [
      "Chicken and dumplings",
      "Meatloaf",
      "Honey sesame chicken",
      "Brown sugar glazed pork loin",
      "Cabbage and noodles"
    ]
  },
  "Video Games": {
    "description": "Playing video games is one of my favorite things to do when I have time to myself. I enjoy games that let me explore different worlds, complete quests, and create things at my own pace. Some of my favorite games are The Sims, Fields of Mistria, Hogwarts Legacy, and Spiritfarer. I like that every game offers something different, whether it's building, exploring, solving problems, or following a story. Gaming is a way for me to relax and have fun after a long day of work, school, and other responsibilities.",
    "heading": "Games I've Played",
    "examples": [
      "The Sims",
      "Fields of Mistria",
      "Hogwarts Legacy",
      "Spiritfarer",
      "Animal Crossing",
      "PowerWash Simulator",
      "And lots of others"
    ]
  },
  "Drawing": {
    "description": "Drawing is something I enjoy because it gives me a way to express myself without having to explain everything in words. I like being able to take an idea in my head and turn it into something I can actually see. Sometimes I draw just because I'm bored, and other times I have a specific idea that I want to work on. I enjoy experimenting with different designs and seeing how much I can improve over time. Drawing is something I can always come back to when I want to relax or be creative.",
    "heading": "Things I've Drawn",
    "examples": [
      "Little doodles",
      "Pumpkins",
      "Portraits",
      "Jellyfish",
      "Whales",
      "Random characters"
    ]
  },
  "Painting": {
    "description": "Painting is another creative hobby that I really enjoy because I get to experiment with different colors, patterns, and designs. I like that painting doesn't always have to be perfect to turn into something interesting. Sometimes I have an idea of what I want to create, but other times I just start painting and see where it goes. One of my favorite parts is watching a blank surface slowly turn into a finished piece of artwork. Painting gives me a chance to focus on something creative and take a break from my everyday responsibilities.",
    "heading": "Things I've Painted",
    "examples": [
      "Clouds",
      "Watermelons",
      "People",
      "Animals"
    ]
  },
  "Crochet": {
    "description": "Crocheting has become one of my favorite hobbies because I love being able to make things with my own hands. I've worked on different projects like hats, scrunchies, and other handmade items, and I enjoy learning new stitches and patterns. Some projects can be frustrating, especially when I have to undo my work and start over, but finishing something makes it worth it. I like choosing different yarn colors and seeing how everything comes together as I work. Crocheting is relaxing for me, and I love knowing that I created something from just yarn and a hook.",
    "heading": "Things I've Crocheted",
    "examples": [
      "Beanies",
      "Scrunchies",
      "Bucket hats",
      "Phone holders",
      "Soap holders",
      "Blankets",
      "Little plushies"
    ]
  }
};
const cards = document.querySelectorAll('.hobby');
const detail = document.querySelector('#detail');
cards.forEach(card => {
  card.setAttribute('aria-pressed', 'false');
  card.addEventListener('click', () => {
    const info = hobbyInfo[card.dataset.hobby];
    if (!info) return;
    const title = document.createElement('h3');
    title.textContent = card.dataset.hobby;
    const description = document.createElement('p');
    description.textContent = info.description;
    const examplesTitle = document.createElement('h4');
    examplesTitle.textContent = info.heading;
    const examples = document.createElement('ul');
    examples.className = 'examples';
    info.examples.forEach(example => {
      const li = document.createElement('li');
      li.textContent = example;
      examples.appendChild(li);
    });
    detail.replaceChildren(title, description, examplesTitle, examples);
    cards.forEach(item => item.setAttribute('aria-pressed', String(item === card)));
    detail.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});
const form = document.querySelector('#contactForm');
form.addEventListener('submit', event => {
  event.preventDefault();
  const recipient = 'sabrinakeener@ymail.com'; 
  const name = document.querySelector('#name').value.trim();
  const message = document.querySelector('#message').value.trim();
  const status = document.querySelector('#formStatus');
  if (!name || !message) {
    status.textContent = 'Please complete both fields.';
    return;
  }
  if (!recipient) {
    status.textContent = 'Thanks! This demo form works, but the site owner must configure an email address before messages can be sent.';
    return;
  }
  const subject = encodeURIComponent(`Hobbies website message from ${name}`);
  const body = encodeURIComponent(message);
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  status.textContent = 'Your email app should open. Please send the prepared message there.';
});
