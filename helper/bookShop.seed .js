"use strict";

const bookModel = require("../models/books.model");

const bookShop = () => {
  const firstBook = new bookModel({
    title: "At Night All Blood Is Black",
    description:
      " A hypnotic, heartbreaking rendering of a mind hurtling towards madness, shattered by grief and the horror of war. Translated by Anna Moschovakis. ",
    status: "Available",
    email: "nashat.alzaatra@yahoo.com",
  });

  firstBook.save();

  const secondBook = new bookModel({
    title: "One Of Us Is Lying",
    description:
      "The Breakfast Club meets Pretty Little Liars, One of Us Is Lying is the story of what happens when five strangers walk into detention and only four walk out alive. Everyone is a suspect, and everyone has something to hide.Pay close attention and you might solve this. On Monday afternoon, five students at Bayview High walk into detention. Bronwyn, the brain, is Yale-bound and never breaks a rule.",
    status: "Available",
    email: "nashat.alzaatra@yahoo.com",
  });

  secondBook.save();

  const thirdBook = new bookModel({
    title: "Midnight Sun",
    description:
      "It’s here! Number one bestselling author Stephenie Meyer makes a triumphant return to the world of Twilight with this highly-anticipated companion; the iconic love story of Bella and Edward told from the vampire’s point of view. When Edward Cullen and Bella Swan met in Twilight, an iconic love story was born. But until now, fans have heard only Bella’s side of the story. At last, readers can experience Edward’s version in the long-awaited companion novel, Midnight Sun.",
    status: "Available",
    email: "nashat.alzaatra@yahoo.com",
  });

  thirdBook.save();

  const fourthBook = new bookModel({
    title: "Test",
    description:
      "It’s here! Number one bestselling author Stephenie Meyer makes a triumphant return to the world of Twilight with this highly-anticipated companion; the iconic love story of Bella and Edward told from the vampire’s point of view. When Edward Cullen and Bella Swan met in Twilight, an iconic love story was born. But until now, fans have heard only Bella’s side of the story. At last, readers can experience Edward’s version in the long-awaited companion novel, Midnight Sun.",
    status: "Available",
    email: "test@yahoo.com",
  });

  fourthBook.save();

  console.log("Books are ready");
};

module.exports = bookShop;
