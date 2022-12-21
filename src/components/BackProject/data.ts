export type Pledge = {
  id: number;
  value: string;
  title: string;
  desc: string;
  minAmount?: number;
  left?: number;
};

export const pledges: Pledge[] = [
  {
    id: 1,
    title: "Pledge with no reward",
    desc: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    value: "pledgeNoReward",
  },
  {
    id: 2,
    title: "Bamboo Stand",
    desc: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    minAmount: 25,
    left: 101,
    value: "bambooStand",
  },
  {
    id: 3,
    title: "Black Edition Stand",
    desc: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    minAmount: 75,
    left: 64,
    value: "blackEditionStand",
  },
  {
    id: 4,
    title: "Mahogany Special Edition",
    desc: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    minAmount: 200,
    left: 0,
    value: "mahoganySpecialEdition",
  },
];
