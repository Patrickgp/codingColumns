const { User, Post, Comment } = require("../models");

const users = [
  {
    id: 1,
    username: "Patrick",
    email: "patrick@email.com",
    password: "password",
  },
  {
    id: 2,
    username: "Lindsay",
    email: "lindsay@email.com",
    password: "password",
  },
  {
    id: 3,
    username: "Paige",
    email: "paige@email.com",
    password: "password",
  },
  {
    id: 4,
    username: "Arlo",
    email: "arlo@email.com",
    password: "password",
  },
];

const posts = [
  {
    title: "Cyblorg lorg lorg bubbles bubbles",
    content: "This code is bananas, B-A-N-A-N-A-S",
    user_id: 1,
  },
  {
    title: "Thinking about fake content is hard",
    content: "How to fake a personality with puns and snarky titles",
    user_id: 1,
  },
  {
    title: "Test Testerson is testing for Test Inc.",
    content: "Tech Mogul Test Testerson is testing the limits of testing",
    user_id: 2,
  },
  {
    title: "Memoirs of a hungry Doggy",
    content: "I have snacks and kibbles but I'm always hungry",
    user_id: 3,
  },
  {
    title: "Awooofuh",
    content: "More kibkobs plzzz.",
    user_id: 4,
  },
];

const comments = [
  {
    content: "I have nightmares about this song..",
    post_id: 1,
    user_id: 2,
  },
  {
    content: "You are literally eating right now!",
    post_id: 4,
    user_id: 1,
  },
  {
    content:
      "Well since no one will see this seed data you don't have to try too hard..BTW I'm hungry",
    post_id: 2,
    user_id: 3,
  },
  {
    content: "Hmm...suspicious?",
    post_id: 3,
    user_id: 1,
  },
  {
    content: "Yes yes all the kibly kobz...More!!!",
    post_id: 5,
    user_id: 3,
  },
];

const seedData = async () => {
  await User.bulkCreate(users, { individualHooks: true });
  await Post.bulkCreate(posts);
  await Comment.bulkCreate(comments);
};

seedData();
