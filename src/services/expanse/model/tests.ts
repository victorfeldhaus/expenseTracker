import { dao } from "../../../database/DAO";

const test = async () => {
  const res = await dao.insert("expanse", {
    name: "test",
    amount: 100,
    date: new Date(),
    category: "test",
  });
};

test();
